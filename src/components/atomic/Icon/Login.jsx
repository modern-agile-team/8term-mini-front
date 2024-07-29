import { Link } from 'react-router-dom';
import styled from 'styled-components';
const LoginDiv = styled.div`
  font-family: countach, sans-serif;
  font-size: 35px;
  line-height: 42px;
  font-weight: 400;
  color: #f7f9f3;
  margin-right: 40px;
`;
/**  @로그인버튼 로그인버튼 컴포넌트*/
export default function Login() {
  //로그인 페이지로 링크
  return (
    <>
      <Link to="#">
        <LoginDiv>login/sign in</LoginDiv>
      </Link>
    </>
  );
}
