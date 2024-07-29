import { LoginSearchDiv } from './styled.js';
import Login from '../atomic/buttons/Login.jsx';
import Search from '../atomic/buttons/Search';

/** @로그인검색 로그인버튼과 검색버튼을 합쳐놓음 flex 컨테이너로 간격맞추기 위해서 */
export default function LoginSearch() {
  //로그인 페이지로 링크g
  return (
    <>
      <LoginSearchDiv>
        <Login></Login>
        <Search></Search>
      </LoginSearchDiv>
    </>
  );
}
