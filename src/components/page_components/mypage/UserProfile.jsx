import React, { useState, useEffect } from 'react';
import { authAxios } from '../../../axios/instance';
import * as S from './MyPageStyled';
import { Navigate } from 'react-router-dom';
import { errorAlert } from '../../public_components/Alert';

export default function UserProfile() {
  const baseUrl = import.meta.env.VITE_IMG_BASE_URL;
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).user_id
    : null;

  useEffect(() => {
    authAxios
      .get(`/users/${userId}`)
      .then(response => {
        console.log(response);
        setUserData(response);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [token, userId]);

  if (!token || !userId) {
    return <Navigate to="/login" replace />;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCompleteClick = () => {
    if (userData.password !== passwordConfirm) {
      errorAlert('수정 실패!', '비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }

    authAxios
      .put(`/users/${userId}`, {
        password1: userData.password,
        passwordConfirm1: passwordConfirm,
      })
      .then(response => {
        console.log('User updated successfully:', response);
        setIsEditing(false);
      })
      .catch(error => {
        console.error('Error updating user data:', error);
      });
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePasswordConfirmChange = e => {
    setPasswordConfirm(e.target.value);
  };

  return (
    <>
      <S.UserProfileDiv>
        <S.UserProfileImgDiv>
          <S.UserProfileImg src={`${baseUrl}profileimg.png`} />
          {isEditing && <S.UserProfileChangeDiv>변경</S.UserProfileChangeDiv>}
        </S.UserProfileImgDiv>

        <S.UserProfileInfoDiv>
          <S.UserProfileColumnDiv $marginBottom={'70px'} $marginTop={'20px'}>
            <S.UserProfileRowDiv>
              <S.labelDiv>닉네임</S.labelDiv>
              <S.UserInfoInput
                name="nickname"
                value={userData.nickname || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </S.UserProfileRowDiv>
            <S.UserProfileRowDiv>
              <S.labelDiv>아이디</S.labelDiv>
              <S.UserInfoInput value={userData.id || ''} disabled={true} />
            </S.UserProfileRowDiv>
          </S.UserProfileColumnDiv>

          <S.UserProfileColumnDiv $marginBottom={'70px'}>
            <S.UserProfileRowDiv>
              <S.labelDiv>비밀번호 수정</S.labelDiv>
              <S.PasswordInput
                name="password"
                type="password"
                value={userData.password || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </S.UserProfileRowDiv>
            <S.UserProfileRowDiv>
              <S.labelDiv>비밀번호 확인</S.labelDiv>
              <S.PasswordInput
                name="passwordConfirm"
                type="password"
                value={passwordConfirm}
                onChange={handlePasswordConfirmChange}
                disabled={!isEditing}
              />
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
