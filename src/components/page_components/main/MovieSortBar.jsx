import * as S from './MainStyled';
import { basicAxios, authAxios } from '../../../axios/instance.js';
import { useState } from 'react';
import getUserInfo from '../../../function/getUserInfo.js';
import { warningAlert } from '../../public_components/Alert.jsx';
export default function MovieSortBar({ setMovies }) {
  const sortList = [
    { key: 'wishList', label: '찜한 영화' },
    { key: 'release_date', label: '개봉순' },
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
        authAxios
          .get(`/users/${userId}/wish-lists/movies`)
          .then(res => {
            setMovies(res.data);
            setPrevSort(sort);
          })
          .catch(err => {
            warningAlert('로그인이 필요한 기능입니다.');
            console.error(err);
          });
        return;
      }
      basicAxios.get(`/movies/?sort=${sort}`).then(res => {
        setPrevSort(sort);
        setMovies(res.data);
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
