import * as S from './MainStyled';
import MovieItem from './MovieItem';
import { useEffect, useState } from 'react';
import { basicAxios, authAxios } from '../../../axios/instance.js';
import SearchBar from './SearchBar.jsx';
import getUserInfo from '../../../function/getUserInfo.js';
import MovieSortBar from './MovieSortBar.jsx';
export default function MovieContainer() {
  //임시 로그인
  // localStorage.setItem('token', 'sadasdjkfhsadkjfhasieulf');
  // localStorage.setItem(
  //   'user',
  //   JSON.stringify({ user_id: 1, id: 'dg1418', nickName: '관리자' })
  // );
  const [userId] = getUserInfo();
  const [movieData, setMovieData] = useState([]);
  const [wishList, setWishList] = useState();

  useEffect(() => {
    basicAxios.get('/movies').then(data => {
      setMovieData(data.data);
    });
    authAxios
      .get(`/users/${userId}/wish-lists`)
      .then(data => {
        setWishList(data.data);
      })
      .catch(err => {
        console.error('찜 리스트 불러오기 실패 \n', err.message);
      });
  }, []);

  if (!movieData) return <div>Loading...</div>;
  return (
    <>
      {/*검색창 */}
      <SearchBar setMovieData={setMovieData}></SearchBar>
      {/*영화 정렬 리스트*/}
      <MovieSortBar setMovieData={setMovieData}></MovieSortBar>
      {/* 영화 리스트 반복*/}
      <S.MovieContainerDiv>
        {movieData.map((val, idx) => {
          return (
            <MovieItem
              key={val.movie_id}
              id={val.movie_id}
              movieName={val.title}
              release={val.release_date.slice(0, 4)}
              imgSrc={val.poster_path}
              originalTitle={val.original_title}
              likeData={
                wishList && wishList.find(ele => ele.movie_id === val.movie_id)
              }
            ></MovieItem>
          );
        })}
      </S.MovieContainerDiv>
    </>
  );
}
