import FavoriteButton from './FavoriteButton';
import * as S from './mainStyled';
import testImg from '/testImg.jpg';
export default function MovieItem() {
  return (
    <S.MovieItemDiv>
      <S.ItemImg src={testImg}></S.ItemImg>
      <S.ItemInfoDiv>
        <S.ItemDesDiv>
          <div>영화이름</div>
          <div>개봉년도</div>
        </S.ItemDesDiv>
        <FavoriteButton></FavoriteButton>
      </S.ItemInfoDiv>
    </S.MovieItemDiv>
  );
}
