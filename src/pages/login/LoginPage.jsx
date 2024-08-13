import React from 'react';
import * as S from './LoginPageStyled';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/page_components/login/LoginForm';

export default function LoginPage() {
  const baseUrl = import.meta.env.VITE_IMG_BASE_URL;
  const navigate = useNavigate();

  return (
    <S.LoginPageDiv>
      <S.LogoImg src={`${baseUrl}logo3.png`} onClick={() => navigate('/')} />
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
