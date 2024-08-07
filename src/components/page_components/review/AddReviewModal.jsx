import { useRef } from 'react';
import * as S from './ReviewStyled';
import profileimg from '/profileimg.png';
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function AddReview({
  toggleaddReviewModal,
  reviews,
  setReviews,
}) {
  const { id } = useParams();
  const textRef = useRef();
  function AddReview() {
    if (!textRef.current.value) {
      alert('텍스트가 없어요');
      return;
    } else {
      toggleaddReviewModal();
    }
    axios
      .post(`/movies/${id}/reviews`, { text: textRef.current.value })
      .then(({ data }) => setReviews([...reviews, data]));
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
              닉네임
            </S.ReviewRowDiv>
            <S.ReviewRowDiv
              $color="#8D8D8D"
              $fontWeight="400"
              $marginRight="auto"
            >
              (qwe12****)
            </S.ReviewRowDiv>
            <S.AddBtn $height="35px" $width="90px" onClick={AddReview}>
              저장
            </S.AddBtn>
          </S.ReviewColumnDiv>
          <S.Hr $bgColor="#000000" $width="100%" $margin="12px 0 40px 0"></S.Hr>
          <S.InputTextArea ref={textRef}></S.InputTextArea>
        </S.ModalContent>
      </S.ModalContainer>
    </>
  );
}
