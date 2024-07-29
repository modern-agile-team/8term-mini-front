import { FlexEndTextDiv, TitleDiv, FlexStartTextDiv } from './styled';

/** @모던무비주제 모던무비의 타이틀 컴포넌트 */
export default function Title() {
  return (
    <>
      <TitleDiv>
        <FlexEndTextDiv>죽기</FlexEndTextDiv>
        <FlexStartTextDiv>전에 봐야 할</FlexStartTextDiv>
        <FlexEndTextDiv>영화 20선</FlexEndTextDiv>
      </TitleDiv>
    </>
  );
}
