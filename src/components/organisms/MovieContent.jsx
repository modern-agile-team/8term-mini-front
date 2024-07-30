import MovieNameYear from '../molecules/MovieNameYear';
import LikeButton from '../atomic/buttons/LikeButton';
import { MovieContentDiv } from './styled';
export default function MovieContent() {
  return (
    <MovieContentDiv>
      <LikeButton></LikeButton>
    </MovieContentDiv>
  );
}
