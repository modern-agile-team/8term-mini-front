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
  width: ${props => props.$width || '90%'};
  height: 1px;
  background-color: ${props => props.$bgColor || '#f7f9f3'};
  margin: ${props => props.$margin || '10px 0px 100px 0px'};
`;
export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
/*리뷰 스타일 */
export const ReviewDiv = styled.div`
  display: flex;
  margin-bottom: ${props => props.$marginBottom || '60px'};
  padding: ${props => props.$padding || '30px 50px 30px 50px'};
  background-color: #f7f9f3;
  flex-direction: column;
  align-items: flex-start;
  width: ${props => props.$width || '74%'};
  height: 150px;
  border-radius: 10px;
  word-break: break-all;
  word-wrap: break-word;
`;
export const ReviewColumnDiv = styled.div`
  font-family: 'Pretendard-Regular';
  font-weight: 600;
  display: flex;
  width: 100%;
  height: ${props => props.$height || 'auto'};
  align-items: center;
  justify-content: ${props => props.$justifyContent || 'flex-start'};
  padding: ${props => props.$padding || '0px'};
  cursor: ${props => props.$cursor || 'default'};
`;
export const ReviewRowDiv = styled.div`
  display: flex;
  font-size: ${props => props.$fontSize || '15px'};
  color: ${props => props.$color || '#000000'};
  font-weight: ${props => props.$fontWeight || '600'};
  margin-right: ${props => props.$marginRight || '0px'};
`;
export const ReviewImg = styled.img`
  width: 25px;
  height: 25px;
  object-fit: fill;
  cursor: pointer;
`;
/*리뷰  */
export const CommentContainerDiv = styled.div`
  width: 100%;
  padding: 0 20px 0 20px;
  margin-bottom: auto;
`;

/*리뷰 모달창 스타일 컴포넌트*/
export const ModalContainer = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;
export const ModalContent = styled.div`
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background: #f7f9f3;
  width: 60%;
  height: 70%;
  padding: 30px 60px 60px 60px;
`;
/*댓글 스타일 */
export const CommentInput = styled.input`
  background-color: #d9d9d9;
  border: none;
  border-radius: 5px;
  width: 800px;
  height: 30px;
  font-size: 18px;
  margin-right: auto;
`;
export const AddBtn = styled.div`
  font-family: 'pretendard-Regular';
  display: flex;
  width: ${props => props.$width || '80px'};
  height: ${props => props.$height || '26px'};
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: ${props => props.$fontSize || '12px'};
  padding: 3px;
  cursor: pointer;
  border: ${props =>
    props.$border ? `${props.$border} solid #000000` : '1px solid #000000'};
  border-radius: 8px;
  color: #000000;
  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;
/* 리뷰 추가하기 스타일 */
export const InputTextArea = styled.textarea`
  font-family: 'Pretendard-Regular';
  resize: none;
  width: 92%;
  height: 100%;
  border: none;
  margin: 0;
  padding: 40px;
  border-radius: 10px;
  background: #d9d9d9;
  font-size: 20px;
`;
export const TextCountDiv = styled.div`
  font-family: 'Pretendard-Regular';
  position: relative;
  top: 25px;
  left: 46%;
`;
export const DeleteImg = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
  margin-left: 15px;
  align-self: center;
  margin-right: ${props => props.$marginRight || '0px'};
`;
