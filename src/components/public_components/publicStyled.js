import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const HeaderImg = styled.img`
  width: 125px;
  height: 75px;
  cursor: pointer;
`;
export const LoginSearchDiv = styled.div`
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
  cursor: pointer;
`;
export const HeaderColumnDiv = styled.div`
  display: flex;
`;
/*페이지네이션 컴포넌트 스타일*/
export const PaginationDiv = styled.div`
  display: flex;
  color: ${({ $color }) => $color || '#f7f9f3'};
  align-items: center;
  justify-content: space-around;
  font-size: 100%;
  width: 1000px;
`;
export const PageSpan = styled.div`
  text-align: center;
  font-family: 'Asterone DEMO', sans-serif;
  padding: 2%;
  cursor: pointer;
  transform: scale(${props => props.$scale || '1'});
`;
export const BraceImg = styled.img`
  width: 1.2%;
  height: 20%;
  cursor: pointer;
  padding: 1%;
  transform: rotate(${props => props.$rotate || '0deg'});
`;
export const FooterDiv = styled.div`
  font-family: 'Pretendard-Regular';
  margin-top: 80px;
  display: flex;
  color: #f7f9f3;
  flex-direction: column;
  text-transform: uppercase;
`;

export const SectionWrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HorizontalLine = styled.hr`
  width: 100%;
  border: none;
  border-top: 2px solid #f7f9f3;
  margin-top: 15px;
`;

export const SectionDiv = styled.div`
  padding: 30px 50px 30px 50px;
  width: 50%;
  font-size: 18px;
  margin: 20px;
`;

export const JoinGroupDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const JoinImg = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

export const HrTopDiv = styled.div`
  font-weight: 600;
`;

export const DescriptionDiv = styled.div`
  margin-top: 20px;
`;

export const MoreModernDiv = styled.div`
  margin-top: 50px;
`;

export const ModernSnsDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const ModernAgileYoutubeDiv = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20%;
  span {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    border-bottom: 2px solid #000000;
    cursor: pointer;
    &:hover {
      border-bottom: 2px solid;
    }
    svg {
      margin-left: 5px;
    }
  }
`;

export const ModernMovieInstagramDiv = styled.div`
  display: flex;
  align-items: center;
  span {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    border-bottom: 2px solid #000000;
    cursor: pointer;
    &:hover {
      border-bottom: 2px solid;
    }
    svg {
      margin-left: 5px;
    }
  }
`;

export const CopywriterWrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 15px;
`;

export const CopywriterDiv = styled.div`
  font-size: 15px;
`;

export const MenuDiv = styled.div`
  font-weight: 500;
`;

export const MenuLink = styled(Link)`
  margin: 0 30px;
  color: #8d8d8d;
  &:hover {
    text-decoration: underline;
  }
`;
