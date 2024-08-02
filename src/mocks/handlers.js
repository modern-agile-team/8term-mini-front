import { http, HttpResponse } from 'msw';
import movieData from '../db/movies.json';
export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get('/movies', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(movieData);
  }),
];
