import { Link } from 'react-router-dom';
import { LoginDiv } from './styled';

/** @로그인버튼 로그인컴포넌트 */
export default function Login() {
  //로그인 페이지로 링크
  return (
    <>
      <Link to="login">
        <LoginDiv>LOGIN / SIGN IN</LoginDiv>
      </Link>
    </>
  );
}
