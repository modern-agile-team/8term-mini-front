import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IntroForm from './IntroForm';

export default function MovieDetail() {
  /**URL에서 영화 ID 가져오기 */
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`/movies?movie-id=${id}`)
      .then(response => response.json())
      .then(data => setMovie(data));
  }, [id]);

  return (
    <div>
      <IntroForm movie={movie} />
    </div>
  );
}
