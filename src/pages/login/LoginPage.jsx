import React from 'react';
import * as S from './LoginPageStyled';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/page_components/login/LoginForm';
import logo3 from '/logo3.png';

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <S.LoginPageDiv>
      <S.LogoImg src={logo3} onClick={() => navigate('/')} />
      <S.LoginFont>LOGIN</S.LoginFont>
      <LoginForm />
      <S.ForgotDiv>FORGOT YOUR PASSWORD?</S.ForgotDiv>
      <S.HorizontalLine />
      <S.NoAccountDiv>
        DON’T HAVE AN ACCOUNT?
        <S.SignUpButton onClick={() => navigate('/register')}>
          SIGN UP
        </S.SignUpButton>
      </S.NoAccountDiv>
    </S.LoginPageDiv>
  );
}
