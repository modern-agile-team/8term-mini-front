import styled from 'styled-components';

/**div 요소 정렬 */
export const LootDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 250px;
`;

export const IdContainerDiv = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const InputDiv = styled.input`
  font-family: 'Pretendard-Regular';
  font-size: 15px;
  font-weight: 500;
  border: none;
  height: 35px;
  width: 100%;
  outline: none;
  padding-left: 10px;
  padding-right: 80px;
  margin-top: 20px;
  box-sizing: border-box;
  &::placeholder {
    color: #d9d9d9;
  }
`;

export const CheckButton = styled.button`
  font-family: 'Pretendard-Regular';
  font-weight: 500;
  position: absolute;
  right: 0;
  height: 50%;
  margin-right: 5px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: ${({ checked }) => (checked ? '#D9D9D9' : '#ffffff')};
  background-color: ${({ checked }) => (checked ? '#B5B5B5' : '#000000')};
`;

/**회원가입 button*/
export const RegisterButton = styled.button`
  font-family: 'Pretendard-Regular';
  background-color: #000000;
  color: #ffffff;
  height: 35px;
  width: 100%;
  border: 1px solid #ffffff;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
    color: #000000;
    border: none;
  }
`;

export const ErrorText = styled.div`
  font-family: 'Pretendard-Regular';
  font-weight: 600;
  font-size: 13px;
  margin-top: 5px;
  color: #616161;
`;

export const SuccessText = styled.div`
  font-family: 'Pretendard-Regular';
  font-weight: 600;
  font-size: 13px;
  margin-top: 5px;
  color: #b5b5b5;
`;
