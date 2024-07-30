import styled from 'styled-components';

export const LoginPageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  background-color: #f7f9f3;
`;

export const LogoImg = styled.img`
  width: 200px;
  margin-bottom: 30px;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const LoginFont = styled.div`
  font-family: countach, sans-serif;
  font-size: 30px;
  margin-bottom: 15px;
  cursor: default;
`;

export const ForgotDiv = styled.div`
  font-family: 'Pretendard-Regular';
  color: #8d8d8d;
  font-size: 14px;
  margin-top: 30px;
  cursor: pointer;
`;

export const HorizontalLine = styled.hr`
  width: 80%;
  border: none;
  border-top: 2px solid #000000;
  margin-top: 25px;
`;

export const NoAccountDiv = styled.div`
  font-family: 'Pretendard-Regular';
  color: #8d8d8d;
  font-size: 14px;
  margin-top: 40px;
  cursor: default;
`;

export const SignUpButton = styled.button`
  font-family: 'Pretendard-Regular';
  font-size: 18px;
  font-weight: 600;
  color: #000000
  background: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 6px;
`;
