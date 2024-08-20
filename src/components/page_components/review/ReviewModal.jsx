import { useRef, useContext } from 'react';
import * as S from './ReviewStyled';
import { useParams } from 'react-router-dom';
import { authAxios } from '../../../axios/instance';
import { warningAlert } from '../../public_components/Alert';
import { useState } from 'react';
import getUserInfo from '../../../function/getUserInfo';
import { ReFetchContext } from './ReviewContext';
export default function ReviewModal({
  toggleaddReviewModal,
  textValue,
  mod,
  reviewId,
}) {
  const baseUrl = import.meta.env.VITE_IMG_BASE_URL;
  const { id } = useParams();
  const textRef = useRef();
  const [userId] = getUserInfo();
  const user = JSON.parse(localStorage.getItem('user'));
  const [textLength, setTextLength] = useState(0);
  const { setReRequest } = useContext(ReFetchContext);
  function charCount(e) {
    setTextLength(e.target.value.length);
  }
  //add모드일때 쓰는 함수
  function AddReview() {
    if (!textRef.current.value) {
      warningAlert('입력값 없음', '텍스트를 입력해주세요');
      return;
    }
    authAxios
      .post(`/movies/${id}/reviews`, {
        userId: userId,
        movieId: id,
        text: textRef.current.value,
      })
      .then(() => {
        setReRequest(new Date());
        toggleaddReviewModal();
      });
  }
  //edit모드일때 쓰는 함수
  function editReview() {
    if (!textRef.current.value) {
      warningAlert('입력값 없음', '텍스트를 입력해주세요');
      return;
    }
    authAxios
      .patch(`/users/my/reviews/${reviewId}`, {
        text: textRef.current.value,
      })
      .then(() => {
        setReRequest(new Date());
        toggleaddReviewModal();
      });
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
              <S.ReviewImg src={`${baseUrl}profileimg.png`}></S.ReviewImg>
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
            <S.AddBtn
              $height="35px"
              $width="90px"
              onClick={mod === 'add' ? AddReview : editReview}
            >
              저장
            </S.AddBtn>
          </S.ReviewColumnDiv>
          <S.Hr $bgColor="#000000" $width="100%" $margin="12px 0 40px 0"></S.Hr>
          <S.TextCountDiv>({textLength}/255)</S.TextCountDiv>
          <S.InputTextArea
            ref={textRef}
            onKeyDown={charCount}
            maxLength={255}
            defaultValue={textValue}
          ></S.InputTextArea>
        </S.ModalContent>
      </S.ModalContainer>
    </>
  );
}
