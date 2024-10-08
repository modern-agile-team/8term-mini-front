import * as S from './MainStyled';
import MovieItem from './MovieItem';
import { useEffect, useState } from 'react';
import { basicAxios, authAxios } from '../../../axios/instance.js';
import SearchBar from './SearchBar.jsx';
import getUserInfo from '../../../function/getUserInfo.js';
import MovieSortBar from './MovieSortBar.jsx';
export default function MovieContainer() {
  const [userId] = getUserInfo();
  const [movies, setMovies] = useState([]);
  const [wishList, setWishList] = useState();
  const [reRequest, setReRequest] = useState();
  //영화 데이터 불러오기

  useEffect(() => {
    basicAxios
      .get('/movies')
      .then(res => {
        setMovies(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  //찜 목록 불러오기
  useEffect(() => {
    authAxios
      .get(`/users/${userId}/wish-lists`)
      .then(res => {
        setWishList(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, [reRequest]);

  return (
    movies && (
      <>
        {/*검색창 */}
        <SearchBar setMovies={setMovies}></SearchBar>
        {/*영화 정렬 리스트*/}
        <MovieSortBar setMovies={setMovies}></MovieSortBar>
        {/* 영화 리스트 반복*/}
        <S.MovieContainerDiv>
          {movies.map(val => {
            return (
              <MovieItem
                key={val.movieId}
                movieData={val}
                wishData={
                  wishList && wishList.find(ele => ele.movieId === val.movieId)
                }
                setReRequest={setReRequest}
              ></MovieItem>
            );
          })}
        </S.MovieContainerDiv>
      </>
    )
  );
}
