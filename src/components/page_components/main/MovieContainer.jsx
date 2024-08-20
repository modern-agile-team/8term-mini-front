import * as S from './MainStyled';
import MovieItem from './MovieItem';
import { useEffect, useState } from 'react';
import { basicAxios, authAxios } from '../../../axios/instance.js';
import SearchBar from './SearchBar.jsx';
export default function MovieContainer() {
  const sortList = [
    { key: 'wishList', label: '찜한 영화' },
    { key: 'release', label: '개봉순' },
    { key: 'popularity', label: '인기순' },
    { key: 'title', label: '제목순' },
  ];
  const userId = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).user_id
    : null;
  const [checked, setChecked] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 });
  const [movieData, setMovieData] = useState([]);
  const [wishList, setWishList] = useState();
  function sortChecked(id) {
    setChecked(prev => ({
      ...{ 0: 0, 1: 0, 2: 0, 3: 0 },
      [id]: prev[id] === 0 ? 30 : 0,
    }));
  }

  useEffect(() => {
    basicAxios.get('/movies').then(data => setMovieData(data.results));
  }, []);
  useEffect(() => {
    authAxios
      .get(`/users/${userId}/wish-lists`)
      .then(data => {
        setWishList(data);
      })
      .catch(err => {
        console.error('찜 리스트 불러오기 실패', err);
      });
  }, []);

  function sortQuery(sort) {
    if (sort === 'wishList') {
      console.log(wishList);
      return;
    }
    basicAxios.get(`/movies/?sort=${sort}`).then(data => {
      setMovieData(data);
    });
  }
  if (!movieData) return <div>Loading...</div>;
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
        {movieData.map((val, idx) => {
          return (
            <MovieItem
              key={idx}
              id={val.id}
              movieName={val.title}
              release={val.release_date.slice(0, 4)}
              imgSrc={val.poster_path}
              originalTitle={val.original_title}
              likeData={
                wishList && wishList.find(ele => ele.movie_id == val.id)
              }
            ></MovieItem>
          );
        })}
      </S.MovieContainerDiv>
      <SearchBar setMovieData={setMovieData}></SearchBar>
    </>
  );
}
