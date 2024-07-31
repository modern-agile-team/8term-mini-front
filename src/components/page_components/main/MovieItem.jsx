import FavoriteButton from './FavoriteButton';
import * as S from './MainStyled';
import testImg from '/testImg.jpg';
export default function MovieItem({ movieName, movieYear }) {
  return (
    <S.MovieItemDiv>
      <S.ItemImg src={testImg}></S.ItemImg>
      <S.ItemInfoDiv>
        <S.ItemCoulmnDiv>
          <div>{movieName}</div>
          <FavoriteButton></FavoriteButton>
        </S.ItemCoulmnDiv>
        <S.ItemCoulmnDiv>
          <div>{movieYear}</div>
        </S.ItemCoulmnDiv>
      </S.ItemInfoDiv>
    </S.MovieItemDiv>
  );
}
