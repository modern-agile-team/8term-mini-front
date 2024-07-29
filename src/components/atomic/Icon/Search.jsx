import { Link } from 'react-router-dom';
import styled from 'styled-components';
const SearchDiv = styled.div`
  font-family: countach, sans-serif;

  font-size: 35px;
  line-height: 42px;
  font-weight: 400;
  margin-right: 40px;
  color: #f7f9f3;
`;
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
