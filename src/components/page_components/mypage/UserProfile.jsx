import React, { useState, useEffect } from 'react';
import { authAxios } from '../../../axios/instance';
import * as S from './MyPageStyled';
import { Navigate } from 'react-router-dom';
import UserModal from './UserModal';
import { successAlert, errorAlert } from '../../public_components/Alert';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function UserProfile() {
  const baseUrl = import.meta.env.VITE_IMG_BASE_URL;
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).user_id
    : null;

  // 현재 유저 정보 불러오기
  useEffect(() => {
    authAxios
      .get(`/users/${userId}`)
      .then(response => {
        console.log('Current User Information:', response);
        setUserData(response);
        setSelectedImage(response.profile || '');
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

  // '수정' 버튼을 클릭 시 편집 모드 활성화
  function handleEditClick() {
    setIsEditing(true);
  }

  // '완료' 버튼을 클릭 시 유저 정보 업데이트
  function handleCompleteClick() {
    if (userData.password !== passwordConfirm) {
      errorAlert('수정 실패!', '비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }
    authAxios
      .put(`/users/${userId}`, {
        password: userData.password,
        passwordConfirm: passwordConfirm,
        nickname: userData.nickname,
        profile: selectedImage,
      })
      .then(function (response) {
        console.log('Modified User Information:', response.userInfo);
        successAlert('수정 성공!', '사용자 님의 정보 수정이 완료되었습니다.');
        setIsEditing(false);
      })
      .catch(function (error) {
        console.error('Error updating user data:', error);
      });
  }

  // 프로필 이미지 변경 모달창 열기
  function handleOpenModal() {
    setIsModalOpen(true);
  }

  // 프로필 이미지 변경 모달창 닫기
  function handleCloseModal() {
    setIsModalOpen(false);
  }

  // 유저의 입력 값이 변경될 때마다 상태 업데이트
  function handleInputChange(e) {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  }

  // 비밀번호 확인 필드의 값이 변경될 때마다 상태 업데이트
  function handlePasswordConfirmChange(e) {
    setPasswordConfirm(e.target.value);
  }

  // 모달 창에서 선택한 프로필 이미지 업데이트
  function handleSelectImage(image) {
    setSelectedImage(image);
  }

  return (
    <>
      <S.UserProfileDiv>
        <S.UserProfileImgDiv>
          <S.UserProfileImg src={`${baseUrl}${selectedImage}`} />{' '}
          {isEditing && (
            <S.UserProfileChangeDiv onClick={handleOpenModal}>
              변경
            </S.UserProfileChangeDiv>
          )}
        </S.UserProfileImgDiv>

        <S.UserProfileInfoDiv>
          <S.UserProfileColumnDiv $marginBottom={'70px'} $marginTop={'20px'}>
            <S.UserProfileRowDiv>
              <S.NickNameContainerDiv>
              <S.labelDiv>닉네임</S.labelDiv>
              <S.NickNameInput
                name="nickname"
                value={userData.nickname || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
                $isEditing={isEditing}
              />
              </S.NickNameContainerDiv>
              
            </S.UserProfileRowDiv>
            <S.UserProfileRowDiv>
              <S.IdContainerDiv>
              <S.labelDiv>아이디</S.labelDiv>
              <S.UserInfoInput value={userData.id || ''} disabled={true} />
              </S.IdContainerDiv>
            </S.UserProfileRowDiv>
          </S.UserProfileColumnDiv>
          <S.UserProfileColumnDiv $marginBottom={'70px'}>
            <S.UserProfileRowDiv>
              <S.PasswordContainerDiv>
                <S.labelDiv>비밀번호 수정</S.labelDiv>
                <S.PasswordInput
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={userData.password || ''}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  $isEditing={isEditing}
                />
                <S.ToggleIconDiv onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </S.ToggleIconDiv>
              </S.PasswordContainerDiv>
            </S.UserProfileRowDiv>
            <S.UserProfileRowDiv>
              <S.PasswordContainerDiv>
                <S.labelDiv>비밀번호 확인</S.labelDiv>
                <S.PasswordInput
                  name="passwordConfirm"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={passwordConfirm}
                  onChange={handlePasswordConfirmChange}
                  disabled={!isEditing}
                  $isEditing={isEditing}
                />
                <S.ToggleIconDiv
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </S.ToggleIconDiv>
              </S.PasswordContainerDiv>
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
      {isModalOpen && (
        <UserModal
          onClose={handleCloseModal}
          onSelectImage={handleSelectImage}
        />
      )}
    </>
  );
}
