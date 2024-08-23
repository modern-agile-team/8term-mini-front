import * as S from './MyPageStyled';
import UserProfile from './UserProfile';

export default function MainScreen() {
  return (
    <>
      <S.MainScreenDiv>
        <S.MainScreenTextDiv>MY PAGE</S.MainScreenTextDiv>
        <UserProfile></UserProfile>
      </S.MainScreenDiv>
    </>
  );
}
