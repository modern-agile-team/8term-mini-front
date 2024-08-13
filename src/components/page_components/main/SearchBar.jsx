import * as S from './MainStyled';

export default function SearchBar() {
  const baseUrl = import.meta.env.VITE_IMG_BASE_URL;

  return (
    <S.SearchBarDiv>
      <S.SearchBarInput></S.SearchBarInput>
      <S.SearchBarImg src={`${baseUrl}search.png`}></S.SearchBarImg>
    </S.SearchBarDiv>
  );
}
