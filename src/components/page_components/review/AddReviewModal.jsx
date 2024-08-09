import { useRef } from 'react';
import * as S from './ReviewStyled';
import profileimg from '/profileimg.png';
import { useParams } from 'react-router-dom';
import { authAxios } from '../../../axios/instance';
import { warningAlert, errorAlert } from '../../public_components/Alert';
import { useState } from 'react';
export default function AddReview({
  toggleaddReviewModal,
  reviews,
  setReviews,
}) {
  const { id } = useParams();
  const textRef = useRef();
  const user = JSON.parse(localStorage.getItem('user'));
  const [textLength, setTextLength] = useState(0);

  function charCount(e) {
    setTextLength(e.target.value.length);
    if (textLength >= 255) {
      errorAlert('입력값 초과', '255자를 넘길 수 없습니다.');
    }
  }
  function AddReview() {
    if (!textRef.current.value) {
      warningAlert('입력값 없음', '텍스트를 입력해주세요');
      return;
    } else {
      toggleaddReviewModal();
    }
    authAxios
      .post(`/movies/${id}/reviews`, {
        user_id: user.user_id,
        text: textRef.current.value,
      })
      .then(data => setReviews([...reviews, data]));
  }
  return (
    <>
      <S.ModalContainer
        id="rootModal"
        onClick={e => {
          if (e.target.id === 'rootModal') {
            toggleaddReviewModal();
          }
        }}
      >
        <S.ModalContent>
          <S.ReviewColumnDiv>
            <S.ReviewRowDiv $marginRight="7px">
              <S.ReviewImg src={profileimg}></S.ReviewImg>
            </S.ReviewRowDiv>
            <S.ReviewRowDiv $fontSize="20px" $marginRight="7px">
              {user.nickName}
            </S.ReviewRowDiv>
            <S.ReviewRowDiv
              $color="#8D8D8D"
              $fontWeight="400"
              $marginRight="auto"
            >
              ({user.id.slice(0, 3)}*****)
            </S.ReviewRowDiv>
            <S.AddBtn $height="35px" $width="90px" onClick={AddReview}>
              저장
            </S.AddBtn>
          </S.ReviewColumnDiv>
          <S.Hr $bgColor="#000000" $width="100%" $margin="12px 0 40px 0"></S.Hr>
          <S.TextCountDiv>({textLength}/255)</S.TextCountDiv>
          <S.InputTextArea
            ref={textRef}
            onKeyDown={charCount}
          ></S.InputTextArea>
        </S.ModalContent>
      </S.ModalContainer>
    </>
  );
}
