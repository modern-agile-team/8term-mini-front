import React from 'react';
import * as S from './IntroPageStyled';
import Header from '../../components/public_components/Header';
import IntroForm from '../../components/page_components/intro/IntroForm';
import ReviewContainer from '../../components/page_components/review/ReviewContainer';
import MovieDetail from '../../components/page_components/intro/MovieDetail';

export default function IntroPage() {
  return (
    <>
      <Header></Header>
      <IntroForm></IntroForm>
      <ReviewContainer></ReviewContainer>
      <MovieDetail></MovieDetail>
    </>
  );
}
