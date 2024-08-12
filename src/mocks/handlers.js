import { http, HttpResponse } from 'msw';
import movieData from '../db/movies.json';
import reviewData from '../db/review.json';
import comment from '../db/comment.json';
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
      console.log(movieData);
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

  http.post('/users', async ({ request }) => {
    const { nickname, id, password, confirmPassword } = await request.json();

    // Simple validation (example purposes)
    if (!nickname || !id || !password || password !== confirmPassword) {
    }

    // Mock response with user profile and JWT token
    return HttpResponse.json({
      user: { id, nickname, password },
      jwt: 'fake-jwt-token',
    });
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
