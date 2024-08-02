import * as S from './MyPageStyled';
import UserProfile from './UserProfile';
import logo3 from '/logo3.png';
export default function MainScreen() {
  return (
    <>
      <S.MainScreenDiv>
        <S.MainScreenImg src={logo3}></S.MainScreenImg>
        <S.MainScreenTextDiv>MY PAGE</S.MainScreenTextDiv>
        <UserProfile></UserProfile>
      </S.MainScreenDiv>
    </>
  );
}
