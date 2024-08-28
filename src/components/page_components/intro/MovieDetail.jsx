import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IntroForm from './IntroForm';
import { basicAxios } from '../../../axios/instance';

export default function MovieDetail() {
  /**URL에서 영화 ID 가져오기 */
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
<<<<<<< HEAD
    basicAxios.get(`/movies/${id}`).then(data => {
      setMovie(data);
=======
    basicAxios.get(`/movies/${id}`).then(res => {
      setMovie(res.data);
>>>>>>> da9d3386a83c658fe2c272bb7698e852d36ce606
    });
  }, []);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <IntroForm movie={movie} />
    </div>
  );
}
