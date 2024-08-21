import styled from 'styled-components';

/** MainScreen 스타일 컴포넌트 */
export const mainScreenDiv = styled.div`
  display: flex;
  width: ${props => props.$width || '100vw'};
  height: 100vh;
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
export const MainImg = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;
export const ImgBox = styled.div`
  background-image: url(${props => props.$bgImg});
  background-size: cover;
  flex-shrink: 0;
  width: 100vw;
  height: 100vh;
`;
/*MovieContainer 스타일 컴포넌트 */

export const MovieContainerDiv = styled.div`
  box-sizing: border-box;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 800px;
  grid-column-gap: 15px;
  grid-row-gap: 140px;
  padding-top: 0px;
`;
/*MovieItem 스타일 컴포넌트 */
export const ItemImg = styled.img`
  height: 85%;
  object-fit: cover;
  max-width: 100%;
`;
export const MovieItemDiv = styled.div`
  display: flex;
  position: relative;
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
  background-color: #f7f9f3;
`;
export const ItemColumnDiv = styled.div`
  font-size: 25px;
  font-family: 'Pretendard-Regular';
  font-weight: 600;
  line-height: 25px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ItemreleaseDiv = styled.div`
  padding-top: 2px;
  padding-left: 3px;
  font-size: 16px;
`;

export const HoverItemDiv = styled.div`
  position: absolute;
  height: 85%;
  width: 100%;
  opacity: 0;
  &:hover {
    opacity: 1;
    position: absolute;
    flex-direction: column;
    font-family: 'Pretendard-Regular';
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f7f9f3;
    font-size: 25px;
    transition-duration: 400ms;
    height: 85%;
    width: 100%;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
export const HoverItemImg = styled.img`
  margin-top: 30px;
  width: 80%;
`;
/** 찜버튼 컴포넌트 스타일 */
export const FavoriteButtonImg = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
`;
/* 정렬박스 스타일 */
export const SortifyDiv = styled.div`
  display: grid;
  margin: 10px 0px 0px 0px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 60px;
`;
export const SortListDiv = styled.div`
  display: flex;
  cursor: pointer;
  border-top: 2px solid white;
  align-items: center;
  justify-content: center;
  font-family: 'Pretendard-Regular';
  color: #f7f9f3;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  transform: translateY(-${props => props.$translate}px);
  transition: all 500ms ease-in;
  &:hover {
    transform: translateY(-30px);
    transition: all 500ms ease-in;
  }
`;
/*검색박스 컴포넌트 */
export const SearchBarInput = styled.input`
  font-family: 'Pretendard-Regular';
  font-size: 30px;
  color: #f7f9f3;
  width: 100%;
  font-weight: 600;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #f7f9f3;
  &:focus {
    outline: none;
  }
`;
export const SearchBarDiv = styled.div`
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translateX(-60%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  z-index: 10;
`;
export const SearchBarImg = styled.img`
  cursor: pointer;
  width: 32px;
  height: 32px;
`;
