import Logo from '../atomic/icons/Logo';
import LoginSearch from '../molecules/LoginSearch';
import { HeaderDiv } from './styled';

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
