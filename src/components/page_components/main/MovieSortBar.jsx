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
  const [checked, setChecked] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 });
  function sortChecked(id) {
    setChecked(prev => ({
      ...{ 0: 0, 1: 0, 2: 0, 3: 0 },
      [id]: prev[id] === 0 ? 30 : 0,
    }));
  }
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
                sortChecked(idx);
              }}
              $translate={checked[idx]}
            >
              {val.label}
            </S.SortListDiv>
          );
        })}
      </S.SortifyDiv>
    </>
  );
}
