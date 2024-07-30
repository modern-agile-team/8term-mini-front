import Title from '../components/atomic/icons/Title';
import MovieContent from '../components/organisms/MovieContent';
import MainScreen from '../components/templates/MainScreen';

/** @메인페이지 메인스크린+영화목록 컴포넌트  */
export default function MainPage() {
  return (
    <>
      <MainScreen></MainScreen>
      <Title></Title>
      <MovieContent></MovieContent>
    </>
  );
}
