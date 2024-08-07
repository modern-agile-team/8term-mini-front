import { http, HttpResponse } from 'msw';
import movieData from '../db/movies.json';

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
];
