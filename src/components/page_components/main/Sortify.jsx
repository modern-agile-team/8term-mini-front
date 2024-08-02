import * as S from './MainStyled';
export default function Sortify() {
  function sortQuery(e) {
    console.log(this.id);
  }
  return (
    <S.SortifyDiv>
      <S.SortListDiv id="favorite" onClick={sortQuery}>
        찜한 영화
      </S.SortListDiv>
      <S.SortListDiv id="release">개봉순</S.SortListDiv>
      <S.SortListDiv id="popularity">인기순</S.SortListDiv>
      <S.SortListDiv id="title">제목순</S.SortListDiv>
    </S.SortifyDiv>
  );
}
