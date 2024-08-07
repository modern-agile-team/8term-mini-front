import { http, HttpResponse } from 'msw';
import movieData from '../db/movies.json';
import reviewData from '../db/review.json';
import comment from '../db/comment.json';
import fs from 'fs';

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
      user: { id: 1, nickname },
      jwt: 'fake-jwt-token',
    });
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

    const newReview = {
      review_id: reviewData.length + 1,
      user_id: 123123,
      movie_id: id,
      comment: newPost.text,
      date: new Date().toISOString().slice(0, 10),
    };
    reviewData.push(newReview);
    return HttpResponse.json(newReview, { status: 201 });
  }),
  http.post('/reviews/:id/comment', async ({ request, params }) => {
    const { id } = params;
    const newPost = await request.json();

    const newComment = {
      comment_id: comment.length + 1,
      user_id: 244,
      review_id: id,
      text: newPost.text,
      date: new Date().toISOString().slice(0, 10),
    };
    comment.push(newComment);
    return HttpResponse.json(newComment, { status: 201 });
  }),
];
