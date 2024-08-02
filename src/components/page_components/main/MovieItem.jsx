import FavoriteButton from './FavoriteButton';
import * as S from './MainStyled';
import testImg from '/testImg.jpg';
import arrrow from '/arrow.png';
import { useNavigate } from 'react-router-dom';
export default function MovieItem({
  movieName,
  release,
  imgSrc,
  originalTitle,
}) {
  const navigate = useNavigate();
  const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
  return (
    <>
      <S.MovieItemDiv>
        <S.ItemImg src={IMG_BASE_URL + imgSrc}></S.ItemImg>
        <S.HoverItemDiv
          onClick={() => {
            navigate('/intro');
          }}
        >
          {originalTitle}
          <S.HoverItemImg src={arrrow}></S.HoverItemImg>
        </S.HoverItemDiv>
        <S.ItemInfoDiv>
          <S.ItemColumnDiv>
            <div>{movieName}</div>
            <FavoriteButton></FavoriteButton>
          </S.ItemColumnDiv>
          <S.ItemColumnDiv>
            <S.ItemreleaseDiv>{release}</S.ItemreleaseDiv>
          </S.ItemColumnDiv>
        </S.ItemInfoDiv>
      </S.MovieItemDiv>
    </>
  );
}
