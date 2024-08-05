import styled from 'styled-components';
import { ReviewColumnDiv } from './../page_components/review/ReviewStyled';

export const HeaderDiv = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-left: 50px;
  padding-top: 15px;
  z-index: 10;
`;
//
export const HeaderImg = styled.img`
  width: 125px;
  height: 75px;
  cursor: pointer;
`;
export const LoginSerchDiv = styled.div`
  font-family: 'countach', sans-serif;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 25px;
  width: 300px;
  padding-right: 50px;
  justify-content: space-between;
  margin-right: 80px;
`;
export const HeaderTextDiv = styled.div`
  color: #f7f9f3;
`;
export const HeaderCoulumnDiv = styled.div`
  display: flex;
`;
/*페이지네이션 컴포넌트 스타일*/
export const PaginationDiv = styled.div`
  display: flex;
  color: ${props => props.$color || '#f7f9f3'};
  align-items: center;
  font-size: ${props => props.$fontSize || '18px'};
  width: ${props => props.$width || '1000px'};
`;
export const PageSpan = styled.span`
  text-align: center;
  font-family: 'Asterone DEMO', sans-serif;
  width: 20%;
  cursor: pointer;
`;
export const BraceImg = styled.img`
  width: ${props => props.$width || '7.5px'};
  height: ${props => props.$height || '15px'};
  cursor: pointer;
  padding-right: 10px;
  transform: rotate(${props => props.$rotate || '0deg'});
`;
