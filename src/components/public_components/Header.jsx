import { Link } from 'react-router-dom';
import * as S from './publicStyled';

/** @헤더 헤더 컴포넌트 */
export default function Header() {
  const baseUrl = import.meta.env.VITE_IMG_BASE_URL;

  return (
    <>
      <S.HeaderDiv>
        <Link to="/">
          <S.HeaderImg src={`${baseUrl}logo3.png`}></S.HeaderImg>
        </Link>
        <S.LoginSearchDiv>
          <S.HeaderColumnDiv>
            <Link to="/login">
              <S.HeaderTextDiv>LOGIN / </S.HeaderTextDiv>
            </Link>
            <Link to="/register">
              <S.HeaderTextDiv>SIGN UP</S.HeaderTextDiv>
            </Link>
          </S.HeaderColumnDiv>
          <Link to="/mypage">
            <S.HeaderTextDiv>MYPAGE</S.HeaderTextDiv>
          </Link>
        </S.LoginSearchDiv>
      </S.HeaderDiv>
    </>
  );
}
