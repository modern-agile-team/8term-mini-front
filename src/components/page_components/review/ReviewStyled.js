import styled from 'styled-components';

export const ReviewHeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #f7f9f3;
  padding: 80px 120px 20px 120px;
`;
export const ReviewTextDiv = styled.div`
  font-family: 'Asterone DEMO', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;
export const ReviewAddButton = styled.div`
  cursor: pointer;
  font-family: 'Pretendard-Regular';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;
export const Hr = styled.div`
  width: 90%;
  ${props => {
    props.$width || '90%';
  }}
  height: 1px;
  background-color: #f7f9f3;
  margin-bottom: ${props => props.$marginBottom || '100px'};
`;
export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 300px;
`;

export const ReviewDiv = styled.div`
  display: flex;
  padding: 50px;
  padding: 30px 50px 30px 50px;
  background-color: #f7f9f3;
  flex-direction: column;
  align-items: flex-start;
  width: 74%;
  height: 150px;
  border-radius: 10px;
`;
export const ReviewColumnDiv = styled.div`
  font-family: 'Pretendard-Regular';
  display: flex;
  width: 100%;
  height: ${props => props.$height || 'auto'};
  align-items: center;
  justify-content: ${props => props.$justifyContent || 'flex-start'};
`;
export const ReviewRowDiv = styled.div`
  text-align: center;
  font-size: ${props => props.$fontSize || '15px'};
  color: ${props => props.$color || '#000000'};
  font-weight: ${props => props.$fontWeight || '1000'};
  margin-right: ${props => props.$marginRight || '0px'};
`;
