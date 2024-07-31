import React from 'react';
import * as S from './NotFoundPageStyled';
import { useNavigate } from 'react-router-dom';

/** @에러페이지 */
export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <S.NotFoundDiv>
      <h1>해당 페이지를 찾지 못했습니다.</h1>
      <p>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</p>
      <S.MoveToMain onClick={() => navigate('/')}>
        메인 페이지로 이동
      </S.MoveToMain>
    </S.NotFoundDiv>
  );
}
