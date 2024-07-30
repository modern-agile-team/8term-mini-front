import MovieName from '../atomic/icons/MovieName';
import MovieYear from '../atomic/icons/MovieYear';
import { MovieNameYearDiv } from './styled';
export default function MovieNameYear() {
  return (
    <MovieNameYearDiv>
      <MovieName name="이름"></MovieName>
      <MovieYear year="1234"></MovieYear>
    </MovieNameYearDiv>
  );
}
