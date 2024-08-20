import { authAxios } from '../../../axios/instance.js';
import ReviewDetailModal from './ReviewDetailModal.jsx';
import * as S from './ReviewStyled.js';
import { useContext, useState } from 'react';
import useToggle from '../../../hooks/useToggle.js';
import ReviewModal from './ReviewModal.jsx';
import getUserInfo from '../../../function/getUserInfo.js';
import { ReFetchContext } from './ReviewContext.js';
import { confirmDeleteAlert } from '../../public_components/Alert.jsx';

export default function Review({ styled, reviewData, isModal, isLiked }) {
  const [reviewModal, setReviewModal] = useState(false);
  const baseUrl = import.meta.env.VITE_IMG_BASE_URL;
  const [editModal, setEditModal] = useToggle();
  const [userId, strId] = getUserInfo();
  const { setReRequest } = useContext(ReFetchContext);

  function toggleModal() {
    setReviewModal(!reviewModal);
  }
  function deleteReview() {
    confirmDeleteAlert('리뷰를 삭제하시겠습니까?').then(confirm => {
      if (confirm.isConfirmed) {
        authAxios
          .delete(`/users/my/reviews/${reviewData.review_id}`)
          .then(() => {
            setReRequest(new Date());
          });
      }
    });
  }
  //리뷰 주가, 리뷰 삭제 함수
  function reviewLike() {
    if (!isLiked) {
      authAxios
        .post(`/users/${userId}/review-likes`, {
          reviewId: reviewData.review_id,
        })
        .then(() => {
          setReRequest(new Date());
        });
    } else {
      authAxios
        .delete(
          `/users/my/review-likes/?user-id=${userId}&review-id=${reviewData.review_id}`
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
            {reviewData.nickname}
          </S.ReviewRowDiv>
          <S.ReviewRowDiv
            $color="#8D8D8D"
            $fontWeight="400"
            $marginRight="auto"
          >
            ({reviewData.id.slice(0, 3)}*****)
          </S.ReviewRowDiv>
          {/*삭제버튼, 수정버튼 띄우는 로직 */}
          {reviewData.id === strId && isModal && (
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
            $fontSize={reviewData.text.length >= 150 ? '15px' : '20px'}
          >
            {reviewData.text}
          </S.ReviewRowDiv>
        </S.ReviewColumnDiv>
        {/*리뷰 자세히보기 모달창 띄우는 로직*/}
        {isModal && reviewModal && (
          <ReviewDetailModal
            toggleModal={toggleModal}
            reviewData={reviewData}
            isLiked={isLiked}
          ></ReviewDetailModal>
        )}
        {/*수정버튼 눌렀을때 모달창 띄우는 로직 */}
        {isModal && editModal && (
          <ReviewModal
            toggleaddReviewModal={setEditModal}
            textValue={reviewData.text}
            mod="edit"
            reviewId={reviewData.review_id}
          ></ReviewModal>
        )}

        <S.ReviewColumnDiv $justifyContent="flex-end">
          <S.ReviewRowDiv>({reviewData.date.slice(0, 10)})</S.ReviewRowDiv>
        </S.ReviewColumnDiv>

        <S.Hr $bgColor="#000" $width="100%" $margin="10px 0px 10px 0px"></S.Hr>
        {/* 좋아요버튼 로직 */}
        <S.ReviewColumnDiv>
          <S.ReviewRowDiv $marginRight="20px">
            <S.ReviewImg
              src={`${baseUrl}favorite${isLiked ? 'On' : 'Off'}.png`}
              onClick={reviewLike}
            />
          </S.ReviewRowDiv>
          <S.ReviewRowDiv $marginRight="20px">
            <div>{reviewData.like_count}</div>
          </S.ReviewRowDiv>
          <S.ReviewRowDiv $marginRight="20px" onClick={toggleModal}>
            <div>댓글</div>
          </S.ReviewRowDiv>
          <S.ReviewRowDiv onClick={toggleModal}>
            <div>{reviewData.comment_count}</div>
          </S.ReviewRowDiv>
        </S.ReviewColumnDiv>
      </S.ReviewDiv>
    </>
  );
}
