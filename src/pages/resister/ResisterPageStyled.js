import styled from 'styled-components';

/**회원가입 페이지 div 요소 정렬 */
export const ResisterPageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  background-color: #000000;
`;

/**모던무비 로고 */
export const LogoImg = styled.img`
  width: 200px;
  margin-bottom: 30px;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

/**SIGN UP 텍스트 */
export const ResisterFont = styled.div`
  font-family: countach, sans-serif;
  font-size: 30px;
  color: #ffffff;
  margin-bottom: 15px;
  cursor: default;
`;

/**밑줄 */
export const HorizontalLine = styled.hr`
  width: 80%;
  border: none;
  border-top: 2px solid #ffffff;
  margin-top: 45px;
`;

/**ALREADY SIGNED UP? */
export const YesAccountDiv = styled.div`
  font-family: 'Pretendard-Regular';
  color: #8d8d8d;
  font-size: 14px;
  margin-top: 40px;
  cursor: default;
`;

/**로그인 페이지 이동 */
export const SignInButton = styled.button`
  font-family: 'Pretendard-Regular';
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  background: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 6px;
`;
