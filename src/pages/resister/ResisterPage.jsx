import React from 'react';
import * as S from './ResisterPageStyled';
import { useNavigate } from 'react-router-dom';
import ResisterForm from '../../components/page_components/resister/ResisterForm';
import logo3 from '/logo3.png';

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <S.ResisterPageDiv>
      <S.LogoImg src={logo3} onClick={() => navigate('/')} />
      <S.ResisterFont>SIGN UP</S.ResisterFont>
      <ResisterForm />
      <S.HorizontalLine />
      <S.YesAccountDiv>
        ALREADY SIGNED UP?
        <S.SignInButton onClick={() => navigate('/login')}>
          SIGN IN
        </S.SignInButton>
      </S.YesAccountDiv>
    </S.ResisterPageDiv>
  );
}
