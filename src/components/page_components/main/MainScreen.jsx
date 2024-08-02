import * as S from './MainStyled';
import Header from '../../public_components/Header';
import Sortify from './Sortify';
import SearchBar from './SearchBar';
import mainscreen from '/mainscreen.jpg';
import mainscreen2 from '/mainscreen2.jpg';
import { useEffect, useState } from 'react';

export default function MainScreen() {
  function nextSlide() {
    console.log(1);
  }
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <>
      <Header></Header>
      <SearchBar></SearchBar>
      <S.mainScreenDiv>
        <S.ImgBox>
          <S.MainImg src={mainscreen}></S.MainImg>
        </S.ImgBox>
        <S.ImgBox>
          <S.MainImg src={mainscreen2}></S.MainImg>
        </S.ImgBox>
      </S.mainScreenDiv>
      <S.TitleDiv>
        <S.TitleContainerDiv>
          <S.FlexEndTextDiv>죽기</S.FlexEndTextDiv>
          <S.FlexStartTextDiv>전에 봐야 할</S.FlexStartTextDiv>
          <S.FlexEndTextDiv>영화 20선</S.FlexEndTextDiv>
        </S.TitleContainerDiv>
      </S.TitleDiv>
      <Sortify></Sortify>
    </>
  );
}
