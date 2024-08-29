import React, { useState, useEffect } from 'react';
import * as S from './MyPageStyled';
import UserModal from './UserModal';
import { userValidation } from '../../../function/userValidation';
import { authAxios } from '../../../axios/instance';
import { successAlert } from '../../public_components/Alert';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { mypageConfirmLoginAlert } from '../../public_components/Alert';
import { useNavigate } from 'react-router-dom';
import { parseJwt } from '../../../function/parseJwt';

export default function UserProfile() {
  const baseUrl = import.meta.env.VITE_IMG_BASE_URL;
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [confirmPassword, setPasswordConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).user_id
    : null;

  const navigate = useNavigate();

  // 마이페이지 접근 시 로그인 여부 확인
  useEffect(() => {
    if (!token || !userId) {
      // 로그인되지 않은 경우 알림창 표시
      mypageConfirmLoginAlert(
        '로그인 필요',
        '마이페이지에 접근하려면 로그인이 필요합니다.',
        '로그인',
        '취소'
      ).then(result => {
        if (result.isConfirmed) {
          navigate('/login', { replace: true, state: { from: '/mypage' } });
        } else {
          navigate('/', { replace: true });
        }
      });
    } else {
      // 현재 유저 정보 불러오기
      authAxios
        .get(`/users/${userId}`)
        .then(response => {
          setUserData(response.data);
          setSelectedImage(response.data.profile || '');
        })
        .catch(error => {
          console.error('사용자 정보 불러오기 실패:', error);
        });
    }
  }, [token, userId, navigate]);

  if (!userData) {
    return <div style={{ color: 'white' }}>Loading...</div>;
  }

  // 엔터키 눌렀을 때 완료 버튼 실행
  function handleKeyDown(e) {
    if (e.key === 'Enter' && isEditing) {
      e.preventDefault();
      handleCompleteClick();
    }
  }

  // '수정' 버튼을 클릭 시 편집 모드 활성화
  function handleEditClick() {
    setIsEditing(true);
  }

  function handleCompleteClick() {
    const isValid = userValidation(userData, confirmPassword);

    if (!isValid) {
      return;
    }

    // 비밀번호가 입력되지 않은 경우 기존 비밀번호를 유지
    const passwordToUpdate = userData.password ? userData.password : undefined;
    const confirmPasswordToUpdate = confirmPassword
      ? confirmPassword
      : undefined;

    // 유저 정보 수정
    authAxios
      .put(`/users/${userId}`, {
        password: passwordToUpdate,
        confirmPassword: confirmPasswordToUpdate,
        nickname: userData.nickname,
        profile: selectedImage,
      })
      .then(response => {
        // 백엔드에서 새로운 토큰 발급해준 것으로 업데이트
        const newToken = response.data.token;
        localStorage.setItem('token', newToken);

        // 새로운 토큰을 파싱하여 유저 정보 업데이트
        const parsedUser = parseJwt(newToken);
        localStorage.setItem('user', JSON.stringify(parsedUser));

        // 성공 알림 및 상태 업데이트
        successAlert('수정 성공!', '사용자 님의 정보 수정이 완료되었습니다.');
        setPasswordConfirm('');
        setIsEditing(false);
      })
      .catch(error => {
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
      <S.UserProfileDiv onKeyDown={handleKeyDown}>
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
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
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
          initialImage={selectedImage}
        />
      )}
    </>
  );
}
