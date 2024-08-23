import { useEffect, useState } from 'react';
import * as S from './publicStyled.js';
import { warningAlert } from './Alert.jsx';
export default function PagiNation({
  color,
  totalItems, //총 데이터 수
  setPage,
  size, //몇개씩 나눌건지
}) {
  const baseUrl = import.meta.env.VITE_IMG_BASE_URL;
  function slicePage(sliceArr, sliceLen) {
    const result = [];
    for (let i = 0; i < sliceArr.length; i += sliceLen) {
      //0부터 길이까지 자르고싶은 갯수만큼 증가
      result.push(sliceArr.slice(i, i + sliceLen));
      //result에 자르고싶은 배열을 n부터 n+5인덱스 까지 잘라서 넣음
    }
    return result;
  }
  function prevPage() {
    if (slicedPageArray[currentPage - 1] === undefined) {
      return warningAlert('처음 페이지입니다');
    }
    setCurrentPage(currentPage - 1);
  }
  function nextPage() {
    if (slicedPageArray[currentPage + 1] === undefined) {
      return warningAlert('마지막 페이지입니다');
    }
    setCurrentPage(currentPage + 1);
  }

  //자르고싶은 배열, 몇개씩 자를지

  const [slicedPageArray, setSlicedPageArray] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [clickedIndex, setClickedIndex] = useState(0);
  const totalPage = Array.from(
    Array(Math.ceil(totalItems / size)),
    (_, index) => index + 1
  );
  useEffect(() => {
    setSlicedPageArray(() => slicePage(totalPage, 5));
  }, [totalItems]);
  //페이지를 n개씩 나누기
  if (!slicedPageArray) return <div>Loding...</div>;
  return (
    <S.PaginationDiv $color={color}>
      <S.BraceImg
        src={`${baseUrl}brace${color ? 'Black' : ''}.png`}
        onClick={prevPage}
      ></S.BraceImg>

      {slicedPageArray[currentPage] &&
        slicedPageArray[currentPage].map((val, idx) => (
          <S.PageSpan
            key={idx}
            onClick={e => {
              setPage(() => e.target.innerText);
              setClickedIndex(idx);
            }}
            $scale={clickedIndex === idx ? 1.5 : 1}
          >
            {val}
          </S.PageSpan>
        ))}

      <S.BraceImg
        src={`${baseUrl}brace${color ? 'Black' : ''}.png`}
        $rotate="180deg"
        onClick={nextPage}
      ></S.BraceImg>
    </S.PaginationDiv>
  );
}
