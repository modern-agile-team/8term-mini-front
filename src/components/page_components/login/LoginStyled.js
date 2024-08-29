import styled from 'styled-components';

/**div 요소 정렬 */
export const LootDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 250px;
`;

export const LoginForm = styled.form`
  width: 250px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 20px;
  padding-bottom: ${({ $hasError }) => ($hasError ? '20px' : '0')};
`;

/**input 요소 */
export const InputDiv = styled.input`
  font-family: 'Pretendard-Regular';
  font-size: 15px;
  background-color: #000000;
  color: #ffffff;
  border: none;
  height: 35px;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  &::placeholder {
    color: #bababa;
  }
`;

/**로그인 button */
export const LoginButton = styled.button`
  font-family: 'Pretendard-Regular';
  background-color: #f7f9f3;
  color: #000000;
  height: 35px;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 20px;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    background-color: #000000;
    color: #ffffff;
    border: none;
  }
`;

export const ErrorText = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  font-family: 'Pretendard-Regular';
  font-weight: 600;
  font-size: 13px;
  color: #616161;
  min-height: 18px;
`;
