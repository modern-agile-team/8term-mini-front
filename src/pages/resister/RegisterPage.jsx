import React from 'react';
import * as S from './RegisterPageStyled';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../../components/page_components/resister/RegisterForm';
import logo3 from '/logo3.png';

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <S.RegisterPageDiv>
      <S.LogoImg src={logo3} onClick={() => navigate('/')} />
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
