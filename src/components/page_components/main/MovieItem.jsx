import FavoriteButton from './FavoriteButton';
import * as S from './MainStyled';
import testImg from '/testImg.jpg';
export default function MovieItem({ movieName, movieYear }) {
  return (
    <S.MovieItemDiv>
      <S.ItemImg src={testImg}></S.ItemImg>
      <S.ItemInfoDiv>
        <S.ItemColumnDiv>
          <div>{movieName}</div>
          <FavoriteButton></FavoriteButton>
        </S.ItemColumnDiv>
        <S.ItemColumnDiv>
          <S.ItemYearDiv>{movieYear}</S.ItemYearDiv>
        </S.ItemColumnDiv>
      </S.ItemInfoDiv>
    </S.MovieItemDiv>
  );
}
