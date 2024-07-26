import { Link } from 'react-router-dom';
import styled from 'styled-components';
const SearchDiv = styled.div`
  font-family: countach, sans-serif;
  width: 90px;
  height: 42px;
  font-size: 30px;
  line-height: 42px;
  font-weight: 400;
  margin-right: 40px;
  color: #f7f9f3;
`;
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
