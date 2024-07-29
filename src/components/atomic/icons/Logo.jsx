import { Link } from 'react-router-dom';
import { LogoImg } from './styled';
import logoImg from '/logo2.png';

/** @모던무비로고 모던무비 로고 아이콘 컴포넌트 */
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
