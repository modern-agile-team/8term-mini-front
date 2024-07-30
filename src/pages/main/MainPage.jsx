import Title from '../../components/atomic/icons/Title';
import { TitleDiv } from './styled';
import MainScreen from '../../components/templates/MainScreen';
import { MovieContainer } from '../../components/templates/MovieContainer';

/** @메인페이지 메인스크린+영화목록 컴포넌트  */
export default function MainPage() {
  return (
    <>
      <MainScreen></MainScreen>
      <TitleDiv>
        <Title></Title>
      </TitleDiv>
      <MovieContainer></MovieContainer>
    </>
  );
}
