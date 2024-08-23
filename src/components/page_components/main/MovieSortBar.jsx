import * as S from './MainStyled';
import { basicAxios, authAxios } from '../../../axios/instance.js';
import { useState } from 'react';
import getUserInfo from '../../../function/getUserInfo.js';
export default function MovieSortBar({ setMovieData }) {
  const sortList = [
    { key: 'wishList', label: '찜한 영화' },
    { key: 'release', label: '개봉순' },
    { key: 'popularity', label: '인기순' },
    { key: 'title', label: '제목순' },
  ];
  const [selectIdx, setSelectIdx] = useState(3);

  const [userId] = getUserInfo();
  function sortQuery(sort) {
    if (sort === 'wishList') {
      authAxios.get(`/users/${userId}/wish-lists/movies`).then(res => {
        setMovieData(res);
      });
    }
    basicAxios.get(`/movies/?sort=${sort}`).then(data => {
      setMovieData(data);
    });
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
