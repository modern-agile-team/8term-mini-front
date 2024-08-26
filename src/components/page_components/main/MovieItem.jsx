import FavoriteButton from './FavoriteButton';
import * as S from './MainStyled';
import { useNavigate } from 'react-router-dom';
export default function MovieItem({ wishData, movieData, setReRequest }) {
  const { posterPath, movieId, originalTitle, releaseDate, title } = movieData;
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_IMG_BASE_URL;
  return (
    <>
      <S.MovieItemDiv>
        <S.ItemImg src={baseUrl + posterPath}></S.ItemImg>
        <S.HoverItemDiv
          onClick={() => {
            navigate(`/intro/${movieId}`, {
              state: movieData,
            });
          }}
        >
          {originalTitle}
          <S.HoverItemImg src={`${baseUrl}arrow.png`}></S.HoverItemImg>
        </S.HoverItemDiv>
        <S.ItemInfoDiv>
          <S.ItemColumnDiv>
            <div>{title}</div>
            <FavoriteButton
              wishData={wishData}
              movieName={title}
              movieId={movieId}
              setReRequest={setReRequest}
            ></FavoriteButton>
          </S.ItemColumnDiv>
          <S.ItemColumnDiv>
            <S.ItemreleaseDiv>{releaseDate.slice(0, 4)}</S.ItemreleaseDiv>
          </S.ItemColumnDiv>
        </S.ItemInfoDiv>
      </S.MovieItemDiv>
    </>
  );
}
