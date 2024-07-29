import Header from '../organisms/Header';
import { MainScreenDiv } from './styled';

/** @메인스크린 사이트 들어왔을때 제일먼저 보이는 메인스크린 컴포넌트 */
export default function MainScreen() {
  return (
    <MainScreenDiv>
      <Header></Header>
    </MainScreenDiv>
  );
}
