import * as S from './MyPageStyled';
import UserProfile from './UserProfile';
import { Navigate } from 'react-router-dom';

export default function MainScreen() {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');

  if (!token || !user) {
    console.error('Error: 사용자 정보를 읽을 수 없습니다.');
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <S.MainScreenDiv>
        <S.MainScreenTextDiv>MY PAGE</S.MainScreenTextDiv>
        <UserProfile></UserProfile>
      </S.MainScreenDiv>
    </>
  );
}
