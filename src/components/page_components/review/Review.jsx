import { authAxios } from '../../../axios/instance.js';
import ReviewDetailModal from './ReviewDetailModal.jsx';
import * as S from './ReviewStyled.js';
import { useState, useEffect, createContext } from 'react';
import useToggle from '../../../hooks/useToggle.js';
import ReviewModal from './ReviewModal.jsx';
import { confirmLoginAlert } from '../../public_components/Alert.jsx';

export default function Review({
  styled,
  reviews,
  isModal,
  reRequest,
  setReRequest,
  isLiked,
}) {
  const [reviewModal, setReviewModal] = useState(false);
  const baseUrl = import.meta.env.VITE_IMG_BASE_URL;
  const [editModal, setEditModal] = useToggle();
  const userId = JSON.parse(localStorage.getItem('user')).user_id || undefined;

  function toggleModal() {
    setReviewModal(!reviewModal);
  }
  function deleteReview() {
    authAxios.delete(`/users/my/reveiws/${reviews.review_id}`).then(() => {
      setReRequest(new Date());
    });
  }
  function reviewLike() {
    if (userId === undefined) {
      return confirmLoginAlert(
        '로그인 필요',
        '로그인이 필요한 기능입니다.',
        '로그인 페이지 이동',
        '확인'
      );
    }
    if (!isLiked) {
      authAxios
        .post(
          `/users/${
            JSON.parse(localStorage.getItem('user')).user_id
          }/review-likes`,
          {
            review_id: reviews.review_id,
          }
        )
        .then(() => {
          setReRequest(new Date());
        });
    } else {
      authAxios
        .delete(
          `/users/my/review-likes/?user-id=${
            JSON.parse(localStorage.getItem('user')).user_id
          }&review-id=${reviews.review_id}`
        )
        .then(() => {
          setReRequest(new Date());
        });
    }
  }

  return (
    <>
      <S.ReviewDiv {...styled}>
        <S.ReviewColumnDiv>
          <S.ReviewRowDiv $marginRight="7px">
            <S.ReviewImg src={`${baseUrl}profileimg.png`}></S.ReviewImg>
          </S.ReviewRowDiv>
          <S.ReviewRowDiv $fontSize="20px" $marginRight="7px">
            {reviews.nickname}
          </S.ReviewRowDiv>
          <S.ReviewRowDiv
            $color="#8D8D8D"
            $fontWeight="400"
            $marginRight="auto"
          >
            ({reviews.id}*****)
          </S.ReviewRowDiv>
          {reviews.user_id === userId && isModal && (
            <S.ReviewRowDiv>
              <S.AddBtn
                $width="35px"
                $fontSize="14px"
                $height="22px"
                $border="2px"
                onClick={setEditModal}
              >
                수정
              </S.AddBtn>
              <S.DeleteImg
                src={`${baseUrl}delete.png`}
                onClick={deleteReview}
              ></S.DeleteImg>
            </S.ReviewRowDiv>
          )}
        </S.ReviewColumnDiv>

        <S.ReviewColumnDiv
          $height="100px"
          $cursor={isModal ? 'pointer' : ''}
          onClick={toggleModal}
        >
          <S.ReviewRowDiv
            $fontSize={reviews.comment.length >= 150 ? '15px' : '20px'}
          >
            {reviews.comment}
          </S.ReviewRowDiv>
        </S.ReviewColumnDiv>
        {/*리뷰 자세히보기 모달창 띄우는 로직*/}
        {isModal && reviewModal && (
          <ReviewDetailModal
            toggleModal={toggleModal}
            reviews={reviews}
            setReRequest={setReRequest}
            reRequest={reRequest}
            isLiked={isLiked}
          ></ReviewDetailModal>
        )}
        {/*수정버튼 눌렀을때 모달창 띄우는 로직 */}
        {isModal && editModal && (
          <ReviewModal
            toggleaddReviewModal={setEditModal}
            setReRequest={setReRequest}
            textValue={reviews.comment}
            mod="edit"
            reviewId={reviews.review_id}
          ></ReviewModal>
        )}

        <S.ReviewColumnDiv $justifyContent="flex-end">
          <S.ReviewRowDiv>({reviews.date})</S.ReviewRowDiv>
        </S.ReviewColumnDiv>

        <S.Hr $bgColor="#000" $width="100%" $margin="10px 0px 10px 0px"></S.Hr>
        {/* 좋아요버튼 로직 */}
        <S.ReviewColumnDiv>
          <S.ReviewRowDiv $marginRight="20px">
            {!isLiked ? (
              <S.ReviewImg
                src={`${baseUrl}favoriteOff.png`}
                onClick={reviewLike}
              />
            ) : (
              <S.ReviewImg
                src={`${baseUrl}favoriteOn.png`}
                onClick={reviewLike}
              />
            )}
          </S.ReviewRowDiv>
          <S.ReviewRowDiv $marginRight="20px">
            <div>{reviews.likeLen}</div>
          </S.ReviewRowDiv>
          <S.ReviewRowDiv $marginRight="20px" onClick={toggleModal}>
            <div>댓글</div>
          </S.ReviewRowDiv>
          <S.ReviewRowDiv onClick={toggleModal}>
            <div>{reviews.commentLen}</div>
          </S.ReviewRowDiv>
        </S.ReviewColumnDiv>
      </S.ReviewDiv>
    </>
  );
}
