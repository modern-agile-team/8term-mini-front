import * as S from './MainStyled';
import MovieItem from './MovieItem';
import { useEffect, useState } from 'react';
import { basicAxios, authAxios } from '../../../axios/instance.js';
import SearchBar from './SearchBar.jsx';
import getUserInfo from '../../../function/getUserInfo.js';
import MovieSortBar from './MovieSortBar.jsx';
export default function MovieContainer() {
  //임시 로그인
  localStorage.setItem('token', 'sadasdjkfhsadkjfhasieulf');
  localStorage.setItem(
    'user',
    JSON.stringify({
      user_id: 1,
      id: 'dg1418',
      nickName: '관리자',
      profile: 'profileimg1.png',
    })
  );
  const [userId] = getUserInfo();
  const [movieData, setMovieData] = useState([]);
  const [wishList, setWishList] = useState();

  useEffect(() => {
    basicAxios.get('/movies').then(data => {
      setMovieData(data);
    });
    authAxios
      .get(`/users/${userId}/wish-lists`)
      .then(data => {
        setWishList(data);
      })
      .catch(err => {
        console.error(err.name, err.message);
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
        {movieData.map(val => {
          return (
            <MovieItem
              key={val.movieId}
              id={val.movieId}
              movieName={val.title}
              release={val.releaseDate.slice(0, 4)}
              imgSrc={val.posterPath}
              originalTitle={val.originalTitle}
              likeData={
                wishList && wishList.find(ele => ele.movieId === val.movieId)
              }
            ></MovieItem>
          );
        })}
      </S.MovieContainerDiv>
    </>
  );
}
