import React from 'react';
import * as S from './styled';
import LoginForm from '../../components/page_components/login/LoginForm';
import logo3 from '/logo3.png';
import { LogoImg } from './styled';

export default function LoginPage() {
  return (
    <S.LoginPageDiv>
      <LogoImg src={logo3} />
      <S.LoginFont>LOGIN</S.LoginFont>
      <LoginForm />
    </S.LoginPageDiv>
  );
}
