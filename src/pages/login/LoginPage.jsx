import React from 'react';
import * as S from './LoginPageStyled';
import LoginForm from '../../components/page_components/login/LoginForm';
import logo3 from '/logo3.png';

export default function LoginPage() {
  return (
    <S.LoginPageDiv>
      <S.LogoImg src={logo3} />
      <S.LoginFont>LOGIN</S.LoginFont>
      <LoginForm />
      <S.ForgotDiv>FORGOT YOUR PASSWORD?</S.ForgotDiv>
      <S.HorizontalLine />
      <S.NoAccountDiv>
        DON’T HAVE AN ACCOUNT?
        <S.SignUpButton>SIGN UP</S.SignUpButton>
      </S.NoAccountDiv>
    </S.LoginPageDiv>
  );
}
