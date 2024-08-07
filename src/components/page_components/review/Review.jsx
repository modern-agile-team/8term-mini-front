import CommentContainer from './CommentContainer.jsx';
import * as S from './ReviewStyled.js';
import favoriteOff from '/favoriteOff.png';
import favoriteOn from '/favoriteOn.png';
import profileimg from '/profileimg.png';
import { useState } from 'react';
export default function Review({ styled, reviews, isModal }) {
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
            {reviews.user_id}
          </S.ReviewRowDiv>
          <S.ReviewRowDiv $color="#8D8D8D" $fontWeight="400">
            ({reviews.user_id})
          </S.ReviewRowDiv>
        </S.ReviewColumnDiv>
        <S.ReviewColumnDiv
          $height="100px"
          $cursor={isModal ? 'pointer' : ''}
          onClick={toggleModal}
        >
          <S.ReviewRowDiv $fontSize="20px">{reviews.comment}</S.ReviewRowDiv>
        </S.ReviewColumnDiv>
        {isModal && reviewModal && (
          <CommentContainer
            toggleModal={toggleModal}
            reviews={reviews}
          ></CommentContainer>
        )}
        <S.ReviewColumnDiv $justifyContent="flex-end">
          <S.ReviewRowDiv>({reviews.date})</S.ReviewRowDiv>
        </S.ReviewColumnDiv>

        <S.Hr $bgColor="#000" $width="100%" $margin="10px 0px 10px 0px"></S.Hr>
        <S.ReviewColumnDiv>
          <S.ReviewRowDiv $marginRight="20px">
            {isLiked ? (
              <S.ReviewImg src={favoriteOff} onClick={toggleLiked} />
            ) : (
              <S.ReviewImg src={favoriteOn} onClick={toggleLiked} />
            )}
          </S.ReviewRowDiv>
          <S.ReviewRowDiv $marginRight="20px">
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
