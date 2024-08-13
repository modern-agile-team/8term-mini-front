import React from 'react';
import * as S from './RegisterPageStyled';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../../components/page_components/register/RegisterForm';

export default function LoginPage() {
  const baseUrl = import.meta.env.VITE_IMG_BASE_URL;
  const navigate = useNavigate();

  return (
    <S.RegisterPageDiv>
      <S.LogoImg src={`${baseUrl}logo3.png`} onClick={() => navigate('/')} />
      <S.RegisterFont>SIGN UP</S.RegisterFont>
      <RegisterForm />
      <S.HorizontalLine />
      <S.YesAccountDiv>
        ALREADY SIGNED UP?
        <S.SignInButton onClick={() => navigate('/login')}>
          SIGN IN
        </S.SignInButton>
      </S.YesAccountDiv>
    </S.RegisterPageDiv>
  );
}
