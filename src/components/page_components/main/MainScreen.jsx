import * as S from './MainStyled';
import { useEffect, useRef, useState } from 'react';

export default function MainScreen() {
  const [imgIndex, setImgIndex] = useState(0);
  const slideRef = useRef(null);
  const baseUrl = import.meta.env.VITE_IMG_BASE_URL;
  const imageArr = ['mainscreen.jpg', 'mainscreen2.jpg', 'mainscreen.jpg'];
  const imageArrLen = imageArr.length;
  useEffect(() => {
    const interval = setInterval(() => {
      //이미지 인덱스를 하나씩 증가를 시킨다
      setImgIndex(prev => (prev === imageArrLen - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    //증가된 이미지 인덱스가 마지막 인덱스가 되면 실행
    if (imgIndex === imageArrLen - 1) {
      //비동기적 처리를 위해 setTimeOut 사용
      //1초에 시간에 걸쳐 변화 => 1초 후에 노딜레이로 바로 0으로 이동시키게 설정해놓음
      //마지막 인덱스일때만 설정시켜놓음 1초에 걸처 다음으로 변화하고 1초 후에 바로 0으로 이동시키기
      setTimeout(() => {
        slideRef.current.style.transition = '';
        slideRef.current.style.transform = `translateX(0)`;
      }, 1000);
    }
    slideRef.current.style.transition = 'all 1s ease-in-out';
    slideRef.current.style.transform = `translateX(${imgIndex * -100}vw)`;
  }, [imgIndex]);
  return (
    <>
      <S.mainScreenDiv ref={slideRef} $width={`$${imageArrLen * 100}vw  `}>
        {imageArr.map((val, idx) => (
          <S.ImgBox key={idx} $bgImg={`${baseUrl}${val}`}></S.ImgBox>
        ))}
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
