import styled from 'styled-components';
const TitleDiv = styled.div`
  font-family: 'Pretendard-Regular';
  height: 43px;
  width: 195px;
  display: flex;
`;
const FlexStartTextDiv = styled.div`
  color: #000000;
  background-color: #f7f9f3;
  align-self: flex-start;
`;
const FlexEndTextDiv = styled.div`
  color: #000000;
  background-color: #f7f9f3;
  align-self: flex-end;
`;
/** @죽기전에봐야할 모던무비 타이틀 컴포넌트 */
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
