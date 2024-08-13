import * as S from './publicStyled.js';

export default function PagiNation({ styled }) {
  const baseUrl = import.meta.env.VITE_IMG_BASE_URL;

  return (
    <S.PaginationDiv {...styled}>
      {styled.$color === '#000' ? (
        <S.BraceImg src={`${baseUrl}braceBlack.png`}></S.BraceImg>
      ) : (
        <S.BraceImg src={`${baseUrl}brace.png`}></S.BraceImg>
      )}

      <S.PageSpan>1</S.PageSpan>
      <S.PageSpan>2</S.PageSpan>
      <S.PageSpan>3</S.PageSpan>
      <S.PageSpan>4</S.PageSpan>
      <S.PageSpan>5</S.PageSpan>
      <S.PageSpan>···</S.PageSpan>

      {styled.$color === '#000' ? (
        <S.BraceImg
          src={`${baseUrl}braceBlack.png`}
          $rotate="180deg"
        ></S.BraceImg>
      ) : (
        <S.BraceImg src={`${baseUrl}brace.png`} $rotate="180deg"></S.BraceImg>
      )}
    </S.PaginationDiv>
  );
}
