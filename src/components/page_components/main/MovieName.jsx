import { MovieNameDiv } from './styled';

/**@영화이름 영화이름 컴포넌트 @props 로 영화이름 받아서 출력 */
export default function MovieName({ name }) {
  return <MovieNameDiv>{name}</MovieNameDiv>;
}
