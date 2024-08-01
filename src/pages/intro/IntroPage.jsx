import React from 'react';
import * as S from './IntroPageStyled';
import Header from '../../components/public_components/Header';
import IntroForm from '../../components/page_components/intro/IntroForm';

export default function IntroPage() {
  return (
    <>
      <Header></Header>
      <IntroForm></IntroForm>
    </>
  );
}
