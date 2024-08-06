import MainScreen from '../../components/page_components/main/MainScreen';
import MovieContainer from '../../components/page_components/main/MovieContainer';
import Header from '../../components/public_components/Header';
import SearchBar from '../../components/page_components/main/SearchBar';
import Footer from '../../components/public_components/Footer';
/** @메인페이지 메인스크린+영화목록 컴포넌트  */
export default function MainPage() {
  return (
    <>
      <Header></Header>
      <SearchBar></SearchBar>
      <MainScreen></MainScreen>
      <MovieContainer></MovieContainer>
      <Footer></Footer>
    </>
  );
}
