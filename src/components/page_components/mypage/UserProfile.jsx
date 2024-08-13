import React, { useState } from 'react';
import * as S from './MyPageStyled';

export default function UserProfile() {
  const baseUrl = import.meta.env.VITE_IMG_BASE_URL;
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCompleteClick = () => {
    setIsEditing(false);
  };

  return (
    <>
      <S.UserProfileDiv>
        <S.UserProfileImgDiv>
          <S.UserProfileImg src={`${baseUrl}profileimg.png`}></S.UserProfileImg>
          <S.UserProfileChangeDiv>변경</S.UserProfileChangeDiv>
        </S.UserProfileImgDiv>

        <S.UserProfileInfoDiv>
          <S.UserProfileColumnDiv $marginBottom={'70px'} $marginTop={'20px'}>
            <S.UserProfileRowDiv>
              <S.labelDiv>닉네임</S.labelDiv>
              <S.UserInfoInput disabled={!isEditing}></S.UserInfoInput>
            </S.UserProfileRowDiv>
            <S.UserProfileRowDiv>
              <S.labelDiv>아이디</S.labelDiv>
              <S.UserInfoInput disabled={true}></S.UserInfoInput>
            </S.UserProfileRowDiv>
          </S.UserProfileColumnDiv>

          <S.UserProfileColumnDiv $marginBottom={'70px'}>
            <S.UserProfileRowDiv>
              <S.labelDiv>비밀번호 수정</S.labelDiv>
              <S.PasswordInput disabled={!isEditing}></S.PasswordInput>
            </S.UserProfileRowDiv>
            <S.UserProfileRowDiv>
              <S.labelDiv>비밀번호 확인</S.labelDiv>
              <S.PasswordInput disabled={!isEditing}></S.PasswordInput>
            </S.UserProfileRowDiv>
          </S.UserProfileColumnDiv>

          <S.ButtonDiv>
            {!isEditing && (
              <S.Button $bgColor="#F7F9F3" onClick={handleEditClick}>
                수정
              </S.Button>
            )}
            {isEditing && (
              <S.Button $fontColor="#F7F9F3" onClick={handleCompleteClick}>
                완료
              </S.Button>
            )}
          </S.ButtonDiv>
        </S.UserProfileInfoDiv>
      </S.UserProfileDiv>
    </>
  );
}
