import { http, HttpResponse } from 'msw';
import movieData from '../db/movies.json';
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
];
