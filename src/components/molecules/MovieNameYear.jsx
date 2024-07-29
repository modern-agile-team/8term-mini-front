import MovieName from '../atomic/icons/MovieName';
import MovieYear from '../atomic/icons/MovieYear';

export default function MovieNameYear(props) {
  return (
    <>
      <MovieName name={props.name}></MovieName>
      <MovieYear year={props.year}></MovieYear>
    </>
  );
}
