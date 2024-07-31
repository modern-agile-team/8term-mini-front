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
  background-color: #000000;
  color: #ffffff;
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

/**로그인 button */
export const LoginButton = styled.button`
  font-family: 'Pretendard-Regular';
  background-color: #f7f9f3;
  color: #000000;
  height: 30px;
  width: 109%;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    background-color: #000000;
    color: #ffffff;
    border: none;
  }
`;
