import * as S from './MainStyled';
import MovieItem from './MovieItem';
import { useEffect, useState } from 'react';
export default function MovieContainer() {
  const sortList = [
    { eng: 'favoite', kor: '찜한 영화' },
    { eng: 'release', kor: '개봉순' },
    { eng: 'popularity', kor: '인기순' },
    { eng: 'title', kor: '제목순' },
  ];
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

  function sortQuery(sort) {
    fetch(`/movies/?movie-id=${sort}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => setData(data));
  }

  return (
    <>
      <S.SortifyDiv>
        {sortList.map((val, idx) => {
          return (
            <S.SortListDiv
              key={idx}
              id={val.eng}
              onClick={e => {
                sortQuery(e.target.id);
              }}
            >
              {val.kor}
            </S.SortListDiv>
          );
        })}
      </S.SortifyDiv>

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
    </>
  );
}
