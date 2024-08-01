import FavoriteButton from './FavoriteButton';
import * as S from './MainStyled';
import testImg from '/testImg.jpg';
import arrrow from '/arrow.png';
import { useNavigate } from 'react-router-dom';
export default function MovieItem({ movieName, movieYear }) {
  const navigate = useNavigate();
  return (
    <>
      <S.MovieItemDiv>
        <S.ItemImg src={testImg}></S.ItemImg>
        <S.HoverItemDiv
          onClick={() => {
            navigate('/intro');
          }}
        >
          영화이름이요
          <S.HoverItemImg src={arrrow}></S.HoverItemImg>
        </S.HoverItemDiv>
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
    </>
  );
}
