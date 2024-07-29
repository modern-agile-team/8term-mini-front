import styled from 'styled-components';
import Logo from '../atomic/Icon/Logo';
import LoginSearch from '../molecules/LoginSearch';

const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
/** @헤더 헤더 컴포넌트 */
export default function Header() {
  //로그인 페이지로 링크
  return (
    <>
      <HeaderDiv>
        <Logo></Logo>
        <LoginSearch></LoginSearch>
      </HeaderDiv>
    </>
  );
}
