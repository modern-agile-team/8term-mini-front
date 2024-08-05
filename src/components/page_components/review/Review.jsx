import { ReviewModal } from './ReviewModal.jsx';
import * as S from './ReviewStyled.js';
import favoriteOff from '/favoriteOff.png';
import favoriteOn from '/favoriteOn.png';
import profileimg from '/profileimg.png';
import { useState } from 'react';
export default function Review({ styled }) {
  const [isLiked, setisLiked] = useState(true);
  const [reviewModal, setReviewModal] = useState(false);
  function toggleModal() {
    setReviewModal(!reviewModal);
  }
  function toggleLiked() {
    setisLiked(!isLiked);
  }

  return (
    <>
      <S.ReviewDiv {...styled}>
        <S.ReviewColumnDiv>
          <S.ReviewRowDiv $marginRight="7px">
            <S.ReviewImg src={profileimg}></S.ReviewImg>
          </S.ReviewRowDiv>
          <S.ReviewRowDiv $fontSize="20px" $marginRight="7px">
            닉네임
          </S.ReviewRowDiv>
          <S.ReviewRowDiv $color="#8D8D8D" $fontWeight="400">
            (qwe12****)
          </S.ReviewRowDiv>
        </S.ReviewColumnDiv>
        <S.ReviewColumnDiv $height="100px">
          <S.ReviewRowDiv $fontSize="20px" onClick={toggleModal}>
            리뷰내용ㅁㄴㅇㅁㄴㅇㅁ
          </S.ReviewRowDiv>

          {reviewModal && <ReviewModal toggleModal={toggleModal}></ReviewModal>}
        </S.ReviewColumnDiv>
        <S.ReviewColumnDiv $justifyContent="flex-end">
          <S.ReviewRowDiv>(2024/08/12)</S.ReviewRowDiv>
        </S.ReviewColumnDiv>

        <S.Hr
          $marginBottom="10px"
          $bgColor="#000"
          $width="100%"
          $marginTop="10px"
        ></S.Hr>
        <S.ReviewColumnDiv>
          <S.ReviewRowDiv $marginRight="20px">
            {isLiked ? (
              <S.ReviewImg src={favoriteOff} onClick={toggleLiked} />
            ) : (
              <S.ReviewImg src={favoriteOn} onClick={toggleLiked} />
            )}
          </S.ReviewRowDiv>
          <S.ReviewRowDiv $marginRight="20px" $fontWeight="800">
            <div>20</div>
          </S.ReviewRowDiv>
          <S.ReviewRowDiv $marginRight="20px" onClick={toggleModal}>
            <div>댓글</div>
          </S.ReviewRowDiv>
          <S.ReviewRowDiv onClick={toggleModal}>
            <div>11</div>
          </S.ReviewRowDiv>
        </S.ReviewColumnDiv>
      </S.ReviewDiv>
    </>
  );
}
