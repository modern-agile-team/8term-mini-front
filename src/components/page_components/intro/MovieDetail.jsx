import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IntroForm from './IntroForm';
import { basicAxios } from '../../../axios/instance';

export default function MovieDetail() {
  /**URL에서 영화 ID 가져오기 */
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    basicAxios.get(`/movies/${id}`).then(res => {
      setMovie(res.data);
    });
  }, []);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <IntroForm movie={movie} />
    </div>
  );
}
