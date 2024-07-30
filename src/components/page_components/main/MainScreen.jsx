import * as S from './mainStyled';
import Header from '../../public_components/Header';
export default function MainScreen() {
  return (
    <>
      <S.mainScreenDiv>
        <Header></Header>
      </S.mainScreenDiv>
      <S.TitleDiv>
        <S.TitleContainerDiv>
          <S.FlexEndTextDiv>죽기</S.FlexEndTextDiv>
          <S.FlexStartTextDiv>전에 봐야 할</S.FlexStartTextDiv>
          <S.FlexEndTextDiv>영화 20선</S.FlexEndTextDiv>
        </S.TitleContainerDiv>
      </S.TitleDiv>
    </>
  );
}
