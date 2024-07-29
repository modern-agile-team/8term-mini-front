import React from 'react';
import * as S from './styled';

export default function NotFound() {
  return (
    <S.NotFoundDiv>
      <h1>404 Not Found</h1>
      <S.MoveToMain>메인 페이지로 이동</S.MoveToMain>
    </S.NotFoundDiv>
  );
}
