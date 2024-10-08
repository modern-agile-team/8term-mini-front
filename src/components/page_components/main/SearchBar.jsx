import * as S from './MainStyled';
import { basicAxios } from '../../../axios/instance';
import { useRef, useState } from 'react';
import { warningAlert } from '../../public_components/Alert';
export default function SearchBar({ setMovies }) {
  const baseUrl = import.meta.env.VITE_IMG_BASE_URL;
  const textRef = useRef();
  const [prevInputData, setPrevInputData] = useState();
  function getSearchData() {
    if (prevInputData !== textRef.current.value) {
      basicAxios.get(`/movies?title=${textRef.current.value}`).then(res => {
        if (res.data.length < 1) {
          warningAlert('검색 결과가 없습니다');
          return;
        }
        if (res.data.length >= 1) {
          setMovies(res.data);
        }
      });
      setPrevInputData(textRef.current.value);
      window.scrollTo(0, 900);
    }
  }

  return (
    <S.SearchBarDiv>
      <S.SearchBarInput
        ref={textRef}
        onKeyPress={e => {
          if (e.code === 'Enter') {
            getSearchData();
          }
        }}
        list="movieName"
      />
      <S.SearchBarImg src={`${baseUrl}search.png`} onClick={getSearchData} />
    </S.SearchBarDiv>
  );
}
