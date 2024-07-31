import styled from 'styled-components';
import mainscreen from '/mainscreen.jpg';

/** MainScreen 스타일 컴포넌트 */
export const mainScreenDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${mainscreen});
  background-size: 125%;
  background-repeat: no-repeat;
`;

export const TitleContainerDiv = styled.div`
  font-family: 'Pretendard-Regular';
  font-weight: 600;
  display: flex;
  height: 83px;
  width: 800px;
  font-size: 30px;
  color: #000000;
`;
export const FlexStartTextDiv = styled.div`
  background-color: #f7f9f3;
  align-self: flex-start;
  display: inline-block;
  padding: 3px;
`;
export const FlexEndTextDiv = styled.div`
  background-color: #f7f9f3;
  align-self: flex-end;
  display: inline-block;
  padding: 3px;
`;
export const TitleDiv = styled.div`
  height: 230px;
  display: flex;
  align-items: center;
  padding-left: 30px;
`;
/*MovieContainer 스타일 컴포넌트 */

export const MovieContainerDiv = styled.div`
  box-sizing: border-box;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 500px;
  grid-column-gap: 15px;
  grid-row-gap: 140px;
`;

/*MovieItem 스타일 컴포넌트 */
export const ItemImg = styled.img`
  height: 85%;
  object-fit: cover;
  max-width: 100%;
`;
export const MovieItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const ItemInfoDiv = styled.div`
  height: 15%;
  border-top: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`;
export const ItemCoulmnDiv = styled.div`
  font-size: 25px;
  font-family: 'Pretendard-Regular';
  font-weight: 600;
  line-height: 25px;
  width: 90%;
  display: flex;
  justify-content: space-between;
`;
/** 찜버튼 컴포넌트 스타일 */
export const FavoriteButtonImg = styled.img`
  width: 20px;
  height: 20px;
`;
/* 영화목록 컬럼 컴포넌트 스타일 */
