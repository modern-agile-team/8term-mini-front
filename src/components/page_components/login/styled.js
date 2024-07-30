import styled from 'styled-components';

export const LootDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 230px;
`;

export const InputDiv = styled.input`
  font-family: 'Pretendard-Regular';
  background-color: #000000;
  color: #ffffff;
  border: none;
  height: 30px;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 20px;
  &::placeholder {
    color: #bababa;
  }
`;

export const LoginButton = styled.button`
  font-family: 'Pretendard-Regular';
  background-color: #f7f9f3;
  color: #000000;
  height: 30px;
  width: 108%;
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
