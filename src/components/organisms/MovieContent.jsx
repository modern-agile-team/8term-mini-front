import MovieNameYear from '../molecules/MovieNameYear';
import LikeButton from '../atomic/buttons/LikeButton';
import { MovieContentDiv, MovieInfoDiv } from './styled';
import MoviePhoto from '../atomic/illustrations/MoviePhoto';
export default function MovieContent() {
  return (
    <MovieInfoDiv>
      <MoviePhoto></MoviePhoto>
      <MovieContentDiv>
        <MovieNameYear></MovieNameYear>
        <LikeButton></LikeButton>
      </MovieContentDiv>
    </MovieInfoDiv>
  );
}
