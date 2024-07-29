import { MovieYearDiv } from './styled';

/** @영화개봉년도 영화개봉년도 컴포넌트 @props로 개봉년도를 받아서 출력 */
export default function MovieYear({ year }) {
  return <MovieYearDiv>{year}</MovieYearDiv>;
}
