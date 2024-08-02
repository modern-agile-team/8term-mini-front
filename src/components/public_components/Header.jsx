import { Link } from 'react-router-dom';
import * as S from './publicStyled';
import logo3 from '/logo3.png';
/** @헤더 헤더 컴포넌트 */
export default function Header() {
  return (
    <>
      <S.HeaderDiv>
        <Link to="/">
          <S.HeaderImg src={logo3}></S.HeaderImg>
        </Link>
        <S.LoginSerchDiv>
          <S.HeaderCoulumnDiv>
            <Link to="/login">
              <S.HeaderTextDiv>LOGIN / </S.HeaderTextDiv>
            </Link>
            <Link to="/register">
              <S.HeaderTextDiv>SIGN UP</S.HeaderTextDiv>
            </Link>
          </S.HeaderCoulumnDiv>
          <Link to="/mypage">
            <S.HeaderTextDiv>MYPAGE</S.HeaderTextDiv>
          </Link>
        </S.LoginSerchDiv>
      </S.HeaderDiv>
    </>
  );
}
