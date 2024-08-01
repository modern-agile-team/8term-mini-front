import FavoriteButton from './FavoriteButton';
import * as S from './MainStyled';
import testImg from '/testImg.jpg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function MovieItem({ movieName, movieYear }) {
  const navigate = useNavigate();
  return (
    <S.MovieItemDiv>
      <S.ItemImg
        src={testImg}
        onClick={() => {
          navigate('/intro');
        }}
      ></S.ItemImg>

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
