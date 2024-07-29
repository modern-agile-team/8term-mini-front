import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImg from '/logo2.png';
const LogoImg = styled.img`
  width: 147px;
  height: 87px;
  margin-left: 59px;
`;
/** @모던무비로고 모던무비 로고 컴포넌트*/
export default function Logo() {
  //메인화면으로 링크
  return (
    <>
      <Link to="#">
        <LogoImg src={logoImg}></LogoImg>
      </Link>
    </>
  );
}
