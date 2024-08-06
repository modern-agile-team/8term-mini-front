import * as S from './MainStyled';
import MovieItem from './MovieItem';
import { useEffect, useState } from 'react';

export default function MovieContainer() {
  const sortList = [
    { key: 'favoite', label: '찜한 영화' },
    { key: 'release', label: '개봉순' },
    { key: 'popularity', label: '인기순' },
    { key: 'title', label: '제목순' },
  ];

  const [checked, setChecked] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 });
  const [data, setData] = useState([]);

  function sortChecked(id) {
    setChecked(prev => ({
      ...{ 0: 0, 1: 0, 2: 0, 3: 0 },
      [id]: prev[id] === 0 ? 30 : 0,
    }));
  }

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
              id={val.key}
              onClick={e => {
                sortQuery(e.target.id);
                sortChecked(idx);
              }}
              $translate={checked[idx]}
            >
              {val.label}
            </S.SortListDiv>
          );
        })}
      </S.SortifyDiv>

      <S.MovieContainerDiv>
        {data.map((val, idx) => {
          return (
            <MovieItem
              key={idx}
              id={val.id}
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
