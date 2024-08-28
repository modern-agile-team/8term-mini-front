import * as S from './MainStyled';
import { basicAxios, authAxios } from '../../../axios/instance.js';
import { useState } from 'react';
import getUserInfo from '../../../function/getUserInfo.js';
export default function MovieSortBar({ setMovies }) {
  const sortList = [
    { key: 'wishList', label: '찜한 영화' },
    { key: 'release', label: '개봉순' },
    { key: 'popularity', label: '인기순' },
    { key: 'title', label: '제목순' },
  ];
  const [selectIdx, setSelectIdx] = useState();
  const [prevSort, setPrevSort] = useState('title');
  const [userId] = getUserInfo();
  function sortQuery(sort) {
    //전 정렬과 다를때 실행
    if (sort !== prevSort) {
      if (sort === 'wishList') {
        authAxios.get(`/users/${userId}/wish-lists/movies`).then(data => {
          setMovies(data);
          setPrevSort(sort);
        });
        return;
      }
      basicAxios.get(`/movies/?sort=${sort}`).then(data => {
        setPrevSort(sort);
        setMovies(data);
      });
    }
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
                setSelectIdx(idx);
              }}
              $translate={selectIdx === idx ? '30' : '0'}
            >
              {val.label}
            </S.SortListDiv>
          );
        })}
      </S.SortifyDiv>
    </>
  );
}
