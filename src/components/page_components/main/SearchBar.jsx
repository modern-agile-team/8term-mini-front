import search from '/search.png';
import * as S from './MainStyled';
export default function SearchBar() {
  return (
    <S.SearchBarDiv>
      <S.SearchBarInput></S.SearchBarInput>
      <S.SearchBarImg src={search}></S.SearchBarImg>
    </S.SearchBarDiv>
  );
}
