import * as S from './publicStyled.js';
import brace from '/brace.png';
import braceBlack from '/braceBlack.png';
export default function PagiNation({ styled }) {
  return (
    <S.PaginationDiv {...styled}>
      {styled.$color === '#000' ? (
        <S.BraceImg src={braceBlack}></S.BraceImg>
      ) : (
        <S.BraceImg src={brace}></S.BraceImg>
      )}

      <S.PageSpan>1</S.PageSpan>
      <S.PageSpan>2</S.PageSpan>
      <S.PageSpan>3</S.PageSpan>
      <S.PageSpan>4</S.PageSpan>
      <S.PageSpan>5</S.PageSpan>
      <S.PageSpan>···</S.PageSpan>

      {styled.$color === '#000' ? (
        <S.BraceImg src={braceBlack} $rotate="180deg"></S.BraceImg>
      ) : (
        <S.BraceImg src={brace} $rotate="180deg"></S.BraceImg>
      )}
    </S.PaginationDiv>
  );
}
