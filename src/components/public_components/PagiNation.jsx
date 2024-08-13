import { useEffect, useState } from 'react';
import * as S from './publicStyled.js';
import brace from '/brace.png';
import braceBlack from '/braceBlack.png';
import useToggle from './../../hooks/useToggle';

export default function PagiNation({
  styled,
  totalItems = 1, //총 몇페이지인지
  setPage,
}) {
  function slicePage(sliceArr, sliceLen) {
    const result = [];
    for (let i = 0; i < sliceArr.length; i += sliceLen) {
      //0부터 길이까지 자르고싶은 갯수만큼 증가
      result.push(sliceArr.slice(i, i + sliceLen));
      //result에 자르고싶은 배열을 n부터 n+5인덱스 까지 잘라서 넣음
    }
    return result;
  }
  function nextPage() {
    if (currentPage < slicedPageArray.length - 1) {
      setCurrentPage(currentPage + 1);
      console.log(currentPage, slicedPageArray.length);
    } else {
      setLastPage();
    }
  }
  function prevPage() {}
  //자르고싶은 배열, 몇개씩 자를지
  const testarr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26,
  ];
  const totalPage =
    Array.from(Array(Math.ceil(totalItems / 5)), (_, index) => index + 1) || 1;
  const [lastPage, lastPageToggle] = useToggle(true);
  const [firstPage, firstPageToggle] = useToggle(false);
  const [slicedPageArray, setSlicedPageArray] = useState([[]]);
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    setSlicedPageArray(slicePage(testarr, 5));
  }, [totalItems]);
  //페이지를 n개씩 나누기
  return (
    <S.PaginationDiv {...styled}>
      {styled.$color === '#000'
        ? firstPage && (
            <S.BraceImg src={braceBlack} onClick={prevPage}></S.BraceImg>
          )
        : firstPage && <S.BraceImg src={brace} onClick={prevPage}></S.BraceImg>}

      {slicedPageArray[currentPage].map((val, idx) => (
        <S.PageSpan
          key={idx}
          onClick={e => {
            setPage(() => e.target.innerText);
          }}
        >
          {val}
        </S.PageSpan>
      ))}

      {styled.$color === '#000'
        ? lastPage && (
            <S.BraceImg
              src={braceBlack}
              $rotate="180deg"
              onClick={nextPage}
            ></S.BraceImg>
          )
        : lastPage && (
            <S.BraceImg
              src={brace}
              $rotate="180deg"
              onClick={nextPage}
            ></S.BraceImg>
          )}
    </S.PaginationDiv>
  );
}
