import * as S from './MainStyled';
import MovieItem from './MovieItem';
export default function MovieContainer() {
  const testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <S.MovieContainerDiv>
      {testArr.map((val, idx) => {
        return (
          <MovieItem key={idx} movieName={'하이요'} movieYear={val}></MovieItem>
        );
      })}
    </S.MovieContainerDiv>
  );
}
