import { Link, useLocation } from 'react-router-dom';
import * as S from './publicStyled';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { confirmLogoutAlert } from './Alert';

/** @헤더 헤더 컴포넌트 */
export default function Header() {
  const baseUrl = import.meta.env.VITE_IMG_BASE_URL;
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (token && user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  function handleLogout() {
    confirmLogoutAlert().then(res => {
      if (res.isConfirmed) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsLogin(false);
        navigate('/');
      }
    });
  }

  // location.pathname을 state로 전달
  function handleLoginClick() {
    navigate('/login', { state: { from: location.pathname } });
  }

  return (
    <>
      <S.HeaderDiv>
        <Link to="/">
          <S.HeaderImg src={`${baseUrl}logo3.png`}></S.HeaderImg>
        </Link>
        <S.LoginSearchDiv>
          <S.HeaderColumnDiv>
            {isLogin ? (
              <S.HeaderTextDiv onClick={handleLogout}>LOGOUT</S.HeaderTextDiv>
            ) : (
              <>
                <S.HeaderTextDiv onClick={handleLoginClick}>
                  LOGIN /
                </S.HeaderTextDiv>
                <Link to="/register">
                  <S.HeaderTextDiv>SIGN UP</S.HeaderTextDiv>
                </Link>
              </>
            )}
          </S.HeaderColumnDiv>
          <Link to="/mypage">
            <S.HeaderTextDiv>MYPAGE</S.HeaderTextDiv>
          </Link>
        </S.LoginSearchDiv>
      </S.HeaderDiv>
    </>
  );
}
