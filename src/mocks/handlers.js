import { http, HttpResponse } from 'msw';
import movieData from '../db/movies.json';
import reviewData from '../db/review.json';
import comment from '../db/comment.json';
import userData from '../db/user.json';
import { SignJWT } from 'jose';

const SECRET_KEY = 'your-access-token-secret-key';
import wishList from '../db/wishList.json';
import reviewLike from '../db/reviewLike.json';

export const handlers = [
  // Intercept "GET /movies" requests...
  http.get('/movies', ({ request }) => {
    const url = new URL(request.url);
    const movieId = url.searchParams.get('movie-id');

    if (!movieId) {
      return HttpResponse.json(movieData);
    }

    if (movieId === 'release') {
      return HttpResponse.json(
        movieData.results.sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date)
        )
      );
    }

    if (movieId === 'title') {
      return HttpResponse.json(
        movieData.results.sort((a, b) => a.title.localeCompare(b.title))
      );
    }

    const movie = movieData.results.find(
      movie => movie.id.toString() === movieId
    );

    if (movie) {
      return HttpResponse.json(movie);
    }
  }),

  // 중복 확인 검사 핸들러
  http.get('/users/check-id', ({ request }) => {
    const url = new URL(request.url);
    const userId = url.searchParams.get('id');

    if (!userId) {
      return HttpResponse.json(
        { message: '아이디를 입력해주세요.' },
        { status: 400 }
      );
    }

    const userExists = userData.some(user => user.id === userId);

    if (userExists) {
      return HttpResponse.json(
        { message: '이미 사용중인 아이디 입니다.' },
        { status: 409 }
      );
    } else {
      return HttpResponse.json(
        { message: '사용 가능한 아이디 입니다.' },
        { status: 200 }
      );
    }
  }),

  // 회원가입 핸들러
  http.post('/users', async ({ request }) => {
    const { nickname, id, password, confirmPassword } = await request.json();

    if (!nickname || !id || !password || password !== confirmPassword) {
      return HttpResponse.json(
        { message: '유효하지 않은 입력입니다.' },
        { status: 400 }
      );
    }

    return HttpResponse.json({
      user: { id, nickname },
      message: '회원가입이 성공적으로 완료되었습니다.',
    });
  }),

  // 로그인 핸들러
  http.post('/users/:id', async ({ request, params }) => {
    try {
      const { id } = params;
      const { password } = await request.json();

      const user = userData.find(user => user.id === id);

      if (!user) {
        return HttpResponse.json(
          { message: '존재하지 않는 아이디입니다.' },
          { status: 401 }
        );
      }

      if (user.password !== password) {
        return HttpResponse.json(
          { message: '비밀번호가 올바르지 않습니다.' },
          { status: 401 }
        );
      }

      // JWT 생성
      const token = await new SignJWT({
        user_id: user.user_id,
        id: user.id,
        nickname: user.nickname,
      })
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' }) // Set the header with algorithm and type
        .setExpirationTime('1h')
        .setIssuer('your-app')
        .sign(new TextEncoder().encode(SECRET_KEY));

      return HttpResponse.json({
        user: { user_id: user.user_id, id: user.id, nickName: user.nickname },
        jwt: token,
      });
    } catch (error) {
      console.error('Error in /users/:id handler:', error);
      return HttpResponse.json(
        { message: '서버 오류가 발생했습니다.' },
        { status: 500 }
      );
    }
  }),

  //영화별 리뷰 데이터 요청
  http.get('/movies/:movieId/reviews', (req, res, ctx) => {
    const { movieId } = req.params;
    let filterReviews = reviewData.filter(
      val => val.movie_id === parseInt(movieId, 10)
    );

    filterReviews = filterReviews.map(reviewData => ({
      ...reviewData,
      likeLen: reviewLike.filter(
        likeData => likeData.review_id == reviewData.review_id
      ).length,
      commentLen: comment.filter(
        commentData => commentData.review_id == reviewData.review_id
      ).length,
    }));
    return HttpResponse.json(filterReviews.reverse());
  }),

  http.get('/reviews/:id/comment', (req, res, ctx) => {
    const { id } = req.params;
    const filterComments = comment.filter(
      val => val.review_id == parseInt(id, 10)
    );
    return HttpResponse.json(filterComments.reverse());
  }),
  http.post('/movies/:movieId/reviews', async ({ request, params }) => {
    const { movieId } = params;
    const { user_id, text, nickName, id } = await request.json();
    const newReview = {
      review_id: reviewData.length + 1,
      id: id.slice(0, 3),
      nickname: nickName,
      movie_id: parseInt(movieId, 10),
      comment: text,
      user_id: user_id,
      date: new Date().toISOString().slice(0, 10),
    };
    reviewData.push(newReview);
    return HttpResponse.json(null, { status: 201 });
  }),
  http.post('/reviews/:reviewId/comment', async ({ request, params }) => {
    const { reviewId } = params;
    const { text, id, user_id, nickName } = await request.json();

    const newComment = {
      comment_id: comment.length + 1,
      user_id: user_id,
      id: id.slice(0, 3),
      review_id: reviewId,
      text: text,
      nickName: nickName,
      date: new Date().toISOString().slice(0, 10),
    };
    comment.push(newComment);
    return HttpResponse.json(newComment, { status: 201 });
  }),
  http.get('users/:id/wish-lists', ({ request, params }, res, ctx) => {
    const { id } = params;
    if (request.headers.get('Authorization')) {
      const userWishList = wishList.filter(val => {
        val.user_id == id;
      });

      return HttpResponse.json(null, { status: 200 });
    }
    return HttpResponse.json(null, { status: 403 });
  }),
  http.delete('/users/my/reveiws/:id', ({ request, params }, res, ctx) => {
    const { id } = params;

    if (request.headers.get('Authorization')) {
      const a = reviewData.findIndex(val => val.review_id == id);
      reviewData.splice(a, 1);
      return HttpResponse.json('asd', { status: 200 });
    }
    return HttpResponse.json(null, { status: 403 });
  }),
  http.patch('/users/my/reviews/:id', async ({ request, params }, res, ctx) => {
    const { id } = params;
    const { text } = await request.json();
    if (request.headers.get('Authorization')) {
      const a = reviewData.findIndex(val => val.review_id == id);

      reviewData[a].comment = text;
      return HttpResponse.json(null, { status: 200 });
    }
    return HttpResponse.json(null, { status: 403 });
  }),
  http.post(
    '/users/:id/review-likes',
    async ({ request, params }, res, ctx) => {
      const { id } = params;
      const { review_id } = await request.json();
      if (request.headers.get('Authorization')) {
        const newLike = {
          review_like_id: reviewLike.length + 1,
          user_id: Number(id),
          review_id: review_id,
        };
        reviewLike.push(newLike);
        return HttpResponse.json(null, { status: 200 });
      }
      return HttpResponse.json(null, { status: 403 });
    }
  ),
  http.delete(
    '/users/my/review-likes',
    async ({ request, params }, res, ctx) => {
      const url = new URL(request.url);
      const userId = url.searchParams.get('user-id');
      const reviewId = url.searchParams.get('review-id');
      if (request.headers.get('Authorization')) {
        const a = reviewLike.findIndex(
          val => val.review_id == reviewId && val.user_id == userId
        );
        reviewLike.splice(a, 1);
        return HttpResponse.json(null, { status: 200 });
      }
      return HttpResponse.json(null, { status: 403 });
    }
  ),
  //특정 유저의 좋아요 데이터 요청
  http.get('/users/:id/review-likes', async ({ request, params }, res, ctx) => {
    const { id } = params;
    if (request.headers.get('Authorization')) {
      let newReviewLike = reviewLike.filter(val => val.user_id == id);
      newReviewLike = newReviewLike.map(val => {
        return val.review_id;
      });
      return HttpResponse.json(newReviewLike, { status: 200 });
    }
    return HttpResponse.json(null, { status: 403 });
  }),
  http.delete(
    '/users/my/comments/:id',
    async ({ request, params }, res, ctx) => {
      const { id } = params;
      if (request.headers.get('Authorization')) {
        const a = comment.findIndex(val => val.comment_id == id);
        comment.splice(a, 1);

        return HttpResponse.json(null, { status: 200 });
      }
      return HttpResponse.json(null, { status: 403 });
    }
  ),
];
