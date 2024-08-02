import styled from 'styled-components';
/*메인스크린 div 스타일 컴포넌트 */
export const MainScreenDiv = styled.div`
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box; /* 패딩과 보더를 포함한 너비 계산 */
  margin-bottom: 500px;
`;
export const MainScreenImg = styled.img`
  width: 20%;
  height: 20%;
`;
export const MainScreenTextDiv = styled.div`
  margin-top: 60px;
  color: #f7f9f3;
  font-family: Countach;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;
/*유저프로필 컴포넌트 스타일 */

export const UserProfileDiv = styled.div`
  font-family: 'Pretendard-Regular';
  display: flex;
  border-radius: 5px;
  padding: 50px;
  margin-top: 140px;
  width: 75%;
  background-color: #f7f9f3;
`;
export const UserProfileImgDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 34%;
  height: 30%;
  border-radius: 3px;
  border: 2px solid #000000;
`;
export const UserProfileImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;
export const UserProfileChangeDiv = styled.div`
  font-weight: 600;
  font-size: 20px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #000000;
  width: 100%;
  height: 20%;
  background: rgba(255, 255, 255, 0.7);
  cursor: pointer;
`;
export const UserProfileInfoDiv = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  padding-right: 60px;
`;
export const UserProfileCoulmnDiv = styled.div`
  display: flex;
  width: 100%;
  font-size: 20px;
  font-weight: 400;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.$marginBottom || '0px'};
  margin-top: ${props => props.$marginTop || '0px'};
`;
export const labelDiv = styled.div`
  line-height: 35px;
  width: 30%;
`;
export const UserInfoInput = styled.input`
  font-size: 20px;
  font-family: 'Pretendard-Regular';
  font-weight: 600;
  width: 50%;
  height: 35px;
  background-color: transparent;
  border: none;
  color: #8d8d8d;
`;
export const PasswordInput = styled(UserInfoInput)`
  border-radius: 5px;
  background: #bababa;
`;
export const UserProfileRowDiv = styled.div`
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  display: flex;
  justify-content: flex-end;
  width: 50%;
`;
export const ButtonDiv = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const Button = styled.button`
  font-family: 'Pretendard-Regular';
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  font-size: 18px;
  border: 2px solid #000000;
  border-radius: 8px;
  width: 110px;
  height: 50px;
  cursor: pointer;
  margin-right: ${props => props.$marginRight || '0px'};
  background-color: ${props => props.$bgColor || '#000000'};
  color: ${props => props.$fontColor || '#000000'};
`;
