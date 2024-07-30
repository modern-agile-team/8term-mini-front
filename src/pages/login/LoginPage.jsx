import React from 'react';
import * as S from './styled';
import InputEmail from '../../components/atomic/inputs/InputEmail';
import InputPassword from '../../components/atomic/inputs/InputPassword';

export default function LoginPage() {
  return (
    <S.LoginPageDiv>
      <S.LoginFont>LOGIN</S.LoginFont>
      <InputEmail />
      <InputPassword />
    </S.LoginPageDiv>
  );
}
