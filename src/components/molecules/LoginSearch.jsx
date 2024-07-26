import styled from 'styled-components';
import Login from '../atomic/Icon/Login';
import Search from '../atomic/Icon/Search';

const LoginSearchDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;
export default function LoginSearch() {
  //로그인 페이지로 링크
  return (
    <>
      <LoginSearchDiv>
        <Login></Login>
        <Search></Search>
      </LoginSearchDiv>
    </>
  );
}
