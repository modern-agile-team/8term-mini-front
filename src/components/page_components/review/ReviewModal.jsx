import { useRef, useContext, useEffect } from 'react';
import * as S from './ReviewStyled';
import { useParams } from 'react-router-dom';
import { authAxios } from '../../../axios/instance';
import { useState } from 'react';
import getUserInfo from '../../../function/getUserInfo';
import { ReFetchContext } from './contextAPI/ReviewContext';
import textValidation from '../../../function/textValidation';
import { useThrottle } from '../../../hooks/useThrottle';
import { warningAlert } from '../../public_components/Alert';

export default function ReviewModal({
  toggleReviewModal,
  textValue,
  mod,
  reviewId,
}) {
  const baseUrl = import.meta.env.VITE_IMG_BASE_URL;
  const { id } = useParams();
  const textRef = useRef();
  const [userId, userStrId, nickName, profile] = getUserInfo();
  const [textLength, setTextLength] = useState(0);
  const { setReRequest } = useContext(ReFetchContext);
  const AddReview = useThrottle(
    () => {
      textValidation(textRef.current.value, 255);
      authAxios
        .post(`/movies/${id}/reviews`, {
          userId: userId,
          text: textRef.current.value,
        })
        .then(() => {
          setReRequest(new Date());
          toggleReviewModal();
        })
        .catch(err => console.error(err.data));
    },
    10000,
    nextRunTime => {
      warningAlert('아직 리뷰를 쓸 수 없습니다.', `${nextRunTime}초 뒤에 가능`);
    }
  );
  function charCount(e) {
    setTextLength(e.target.value.length);
  }
  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      toggleReviewModal();
    }
  }
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflowY = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  //add모드일때 쓰는 함수
  //edit모드일때 쓰는 함수
  function editReview() {
    textValidation(textRef.current.value, 255);
    authAxios
      .patch(`/users/my/reviews/${reviewId}`, {
        text: textRef.current.value,
      })
      .then(() => {
        setReRequest(new Date());
        toggleReviewModal();
      })
      .catch(err => {
        console.error(err.data);
      });
  }
  return (
    <>
      <S.ModalContainer
        id="rootModal"
        onClick={e => {
          if (e.target.id === 'rootModal') {
            toggleReviewModal();
          }
        }}
      >
        <S.ModalContent>
          <S.ReviewColumnDiv>
            <S.ReviewRowDiv $marginRight="7px">
              <S.ReviewImg src={`${baseUrl}profileimg.png`}></S.ReviewImg>
            </S.ReviewRowDiv>
            <S.ReviewRowDiv $fontSize="20px" $marginRight="7px">
              {nickName}
            </S.ReviewRowDiv>
            <S.ReviewRowDiv
              $color="#8D8D8D"
              $fontWeight="400"
              $marginRight="auto"
            >
              ({userStrId.slice(0, 3)}*****)
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
            maxLength={254}
            defaultValue={textValue}
          ></S.InputTextArea>
        </S.ModalContent>
      </S.ModalContainer>
    </>
  );
}
