import * as S from './MainStyled';
import MovieItem from './MovieItem';
import { useEffect, useState } from 'react';
export default function MovieContainer() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/movies', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => setData(data.results));
  }, []);
  return (
    <S.MovieContainerDiv>
      {data.map((val, idx) => {
        return (
          <MovieItem
            key={idx}
            movieName={val.title}
            release={val.release_date.slice(0, 4)}
            imgSrc={val.poster_path}
            originalTitle={val.original_title}
          ></MovieItem>
        );
      })}
    </S.MovieContainerDiv>
  );
}
