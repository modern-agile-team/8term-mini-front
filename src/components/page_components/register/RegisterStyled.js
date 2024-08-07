import styled from 'styled-components';

/**div 요소 정렬 */
export const LootDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 230px;
`;

/**input 요소 */
export const InputDiv = styled.input`
  font-family: 'Pretendard-Regular';
  background-color: #f7f9f3;
  color: #000000;
  border: none;
  height: 30px;
  width: 100%;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 20px;
  &::placeholder {
    color: #bababa;
  }
`;

/**회원가입 button*/
export const RegisterButton = styled.button`
  font-family: 'Pretendard-Regular';
  background-color: #000000;
  color: #ffffff;
  height: 30px;
  width: 109%;
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
  margin-top: 5px;
  font-family: 'Pretendard-Regular';
  color: #ff0000;
`;
