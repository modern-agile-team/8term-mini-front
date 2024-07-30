import styled from 'styled-components';

export const LootDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
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
