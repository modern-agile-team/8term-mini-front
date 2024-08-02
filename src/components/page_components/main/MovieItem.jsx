import FavoriteButton from './FavoriteButton';
import * as S from './MainStyled';
import arrrow from '/arrow.png';
import { useNavigate } from 'react-router-dom';
export default function MovieItem(props) {
  const navigate = useNavigate();
  const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
  return (
    <>
      <S.MovieItemDiv>
        <S.ItemImg src={IMG_BASE_URL + props.imgSrc}></S.ItemImg>
        <S.HoverItemDiv
          onClick={() => {
            navigate(`/intro/${props.id}`, {
              state: props,
            });
          }}
        >
          {props.originalTitle}
          <S.HoverItemImg src={arrrow}></S.HoverItemImg>
        </S.HoverItemDiv>
        <S.ItemInfoDiv>
          <S.ItemColumnDiv>
            <div>{props.movieName}</div>
            <FavoriteButton></FavoriteButton>
          </S.ItemColumnDiv>
          <S.ItemColumnDiv>
            <S.ItemreleaseDiv>{props.release}</S.ItemreleaseDiv>
          </S.ItemColumnDiv>
        </S.ItemInfoDiv>
      </S.MovieItemDiv>
    </>
  );
}
