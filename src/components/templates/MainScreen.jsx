import Header from '../organisms/Header';
import styled from 'styled-components';
import mainscreen from '/mainscreen.jpg';

const MainScreenDiv = styled.div`
  height: 100vh;
  background-image: url(${mainscreen});
  background-size: cover;
`;
export default function MainScreen() {
  return (
    <MainScreenDiv>
      <Header></Header>
    </MainScreenDiv>
  );
}
