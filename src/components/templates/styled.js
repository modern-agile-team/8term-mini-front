import mainscreen from '/mainscreen.jpg';
import styled from 'styled-components';
export const MainScreenDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${mainscreen});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
export const MovieContainerDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
