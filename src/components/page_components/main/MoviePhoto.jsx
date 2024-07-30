import { Link } from 'react-router-dom';
import { MoviePhotoImg } from './styled';
import testImg from '/testImg.jpg';
/** @영화이미지 모던무비 메인화면 영화 이미지 컴포넌트 @props로 이미지 이름 받음 */
export default function MoviePhoto() {
  return (
    <Link to="#">
      <MoviePhotoImg src={testImg}></MoviePhotoImg>
    </Link>
  );
}
