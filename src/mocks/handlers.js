import { http, HttpResponse } from 'msw';
import movieData from '../db/movies.json';
import reviewData from '../db/review.js';
import comment from '../db/comment.json';
export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get('/movies', ({ request }) => {
    // ...and respond to them using this JSON response.
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
  http.get('/movies/:movieId/reviews', (req, res, ctx) => {
    const { movieId } = req.params;
    const filterReviews = reviewData.filter(
      val => val.movie_id === parseInt(movieId, 10)
    );
    return HttpResponse.json(filterReviews);
  }),
  http.get('/reviews/:id/comment', (req, res, ctx) => {
    const { id } = req.params;
    const filterComments = comment.filter(
      val => val.review_id == parseInt(id, 10)
    );
    return HttpResponse.json(filterComments);
  }),
  http.post('/movies/:id/reviews', async ({ request, params }) => {
    const { id } = params;
    const newPost = await request.json();
    console.log(newPost, id);
    const newReview = {
      review_id: reviewData.length + 1,
      user_id: 123123,
      movie_id: id,
      comment: newPost.text,
      date: new Date().toISOString().slice(0, 10),
    };
    reviewData.push(newReview);

    return HttpResponse.json(newPost, { status: 201 });
  }),
];
