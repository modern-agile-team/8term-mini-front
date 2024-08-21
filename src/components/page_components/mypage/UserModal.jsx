import React, { useState, useRef } from 'react';
import * as S from './MyPageStyled';

export default function UserModal({ onClose, onSelectImage }) {
  const baseUrl = import.meta.env.VITE_IMG_BASE_URL;
  const modalRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState('');

  // 모달창 외부를 클릭했을 때만 닫기
  function handleOverlayClick(e) {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  }

  // 이미지를 클릭했을 때 선택한 이미지를 상태로 설정
  function handleImageClick(image) {
    setSelectedImage(image);
  }

  // 선택한 이미지를 UserProfile(부모) 컴포넌트로 전달 후 모달창 닫기
  function handleConfirmClick() {
    onSelectImage(selectedImage);
    onClose();
  }

  return (
    <S.ModalOverlay onClick={handleOverlayClick}>
      <S.ModalContainer ref={modalRef}>
        PROFILE
        <S.ModalProfileDiv>
          {[
            'profileimg1.png',
            'profileimg2.png',
            'profileimg3.png',
            'profileimg4.png',
            'profileimg5.png',
            'profileimg6.png',
            'profileimg7.png',
            'profileimg8.png',
          ].map(img => (
            <S.ModalProfileImg
              key={img}
              src={`${baseUrl}${img}`}
              onClick={() => handleImageClick(img)}
              $selected={selectedImage === img}
            />
          ))}
        </S.ModalProfileDiv>
        <S.HorizontalLine />
        <S.ModalButton onClick={handleConfirmClick}>확인</S.ModalButton>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
}
