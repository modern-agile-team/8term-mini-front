import React from 'react';
import * as S from './styled';
import InputEmail from '../../components/page_components/login/InputEmail';
import InputPassword from '../../components/page_components/login/InputPassword';

export default function LoginPage() {
  return (
    <S.LoginPageDiv>
      <S.LoginFont>LOGIN</S.LoginFont>
      <InputEmail />
      <InputPassword />
    </S.LoginPageDiv>
  );
}
