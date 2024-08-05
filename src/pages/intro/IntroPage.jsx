import React from 'react';
import * as S from './IntroPageStyled';
import Header from '../../components/public_components/Header';
import MovieDetail from '../../components/page_components/intro/MovieDetail';

export default function IntroPage() {
  return (
    <>
      <Header></Header>
      <MovieDetail></MovieDetail>
    </>
  );
}
