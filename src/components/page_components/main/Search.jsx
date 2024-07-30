import { Link } from 'react-router-dom';
import { SearchDiv } from './styled';

/** @검색버튼 검색버튼 컴포넌트 */
export default function Search() {
  //검색 모달창 띄워주기
  return (
    <>
      <Link to="#">
        <SearchDiv>SEARCH</SearchDiv>
      </Link>
    </>
  );
}
