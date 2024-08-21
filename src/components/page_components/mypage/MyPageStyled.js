import styled from 'styled-components';
/*메인스크린 div 스타일 컴포넌트 */
export const MainScreenDiv = styled.div`
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box; /* 패딩과 보더를 포함한 너비 계산 */
`;

export const MainScreenTextDiv = styled.div`
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
  margin-top: 50px;
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
export const UserProfileColumnDiv = styled.div`
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
  width: 130px;
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
export const IDwordInput = styled(UserInfoInput)`
  font-size: 20px;
  font-family: 'Pretendard-Regular';
  font-weight: 600;
  border-radius: 5px;
  background: #bababa;
  color: ${props => (props.$isEditing ? '#000000' : '#8d8d8d')};
  width: 50%;
  height: 35px;
`;

export const PasswordInput = styled(UserInfoInput)`
  border-radius: 5px;
  background: #bababa;
  color: ${props => (props.$isEditing ? '#000000' : '#8d8d8d')};
`;
export const UserProfileRowDiv = styled.div`
  font-style: normal;
  font-weight: 600;
  line-height: normal;
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

export const PasswordContainerDiv = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-end;
`;

export const ToggleIconDiv = styled.div`
  cursor: pointer;
  font-size: 1.2em;
  color: #000000;
  position: absolute;
  margin-top: 3px;
  right: 10px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  font-family: Countach;
  font-size: 30px;
  background-color: #000000;
  color: #ffffff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  border-radius: 15px;
  border: 2px solid rgba(255, 255, 255);
  height: 550px;
  max-width: 800px;
  width: 100%;
`;

export const ModalProfileDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  margin-top: 20px;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  place-items: center;
`;

export const ModalProfileImg = styled.img`
  height: 180px;
  width: 180px;
  cursor: pointer;
  border: ${({ props }) => (props ? '4px solid #808080' : '4px solid #000000')};
  &:hover {
    transform: scale(1.1);
  }
`;

export const HorizontalLine = styled.hr`
  width: 100%;
  border: none;
  border-top: 3px solid #f7f9f3;
  margin-top: 20px;
`;

export const ModalButton = styled.button`
  font-family: 'Pretendard-Regular';
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 8px;
  padding: 5px 25px;
  margin-top: 20px;
`;
