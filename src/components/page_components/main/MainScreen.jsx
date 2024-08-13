import * as S from './MainStyled';
import { useEffect, useRef, useState } from 'react';

export default function MainScreen() {
  const [slideRange, setSlideRange] = useState(0);
  const slideRef = useRef(null);
  const baseUrl = import.meta.env.VITE_IMG_BASE_URL;

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideRange(prevRange => (prevRange === -100 ? 0 : -100));
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    slideRef.current.style.transition = 'all 1s ease-in-out';
    slideRef.current.style.transform = `translateX(${slideRange}vw)`;
  }, [slideRange]);
  return (
    <>
      <S.mainScreenDiv ref={slideRef}>
        <S.ImgBox $bgImg={`${baseUrl}mainscreen.jpg`}></S.ImgBox>
        <S.ImgBox $bgImg={`${baseUrl}mainscreen2.jpg`}></S.ImgBox>
      </S.mainScreenDiv>
      <S.TitleDiv>
        <S.TitleContainerDiv>
          <S.FlexEndTextDiv>죽기</S.FlexEndTextDiv>
          <S.FlexStartTextDiv>전에 봐야 할</S.FlexStartTextDiv>
          <S.FlexEndTextDiv>영화 20선</S.FlexEndTextDiv>
        </S.TitleContainerDiv>
      </S.TitleDiv>
    </>
  );
}
