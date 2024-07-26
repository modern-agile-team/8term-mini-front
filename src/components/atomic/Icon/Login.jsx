import { Link } from 'react-router-dom';
import styled from 'styled-components';
const LoginDiv = styled.div`
  font-family: countach, sans-serif;
  width: 173px;
  height: 42px;
  font-size: 30px;
  line-height: 42px;
  font-weight: 400;
  color: #f7f9f3;
  margin-right: 40px;
`;
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
