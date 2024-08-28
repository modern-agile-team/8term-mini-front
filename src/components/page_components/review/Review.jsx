import { authAxios } from '../../../axios/instance.js';
import CommentModal from './comment/CommentModal.jsx';
import * as S from './ReviewStyled.js';
import { useContext } from 'react';
import useToggle from '../../../hooks/useToggle.js';
import ReviewModal from './ReviewModal.jsx';
import getUserInfo from '../../../function/getUserInfo.js';
import { ReFetchContext } from './contextAPI/ReviewContext.js';
import { confirmDeleteAlert } from '../../public_components/Alert.jsx';

export default function Review({ reviewData, isLiked }) {
  //리뷰 자세히 보기 모달창 띄우는
  const [reviewModal, setReviewModal] = useToggle();
  const baseUrl = import.meta.env.VITE_IMG_BASE_URL;
  const [editModal, setEditModal] = useToggle();
  const [userId, strId] = getUserInfo();
  const { setReRequest } = useContext(ReFetchContext);
  function deleteReview() {
    confirmDeleteAlert('리뷰를 삭제하시겠습니까?').then(confirm => {
      if (confirm.isConfirmed) {
        authAxios
          .delete(`/users/my/reviews/${reviewData.reviewId}`)
          .then(() => {
            setReRequest(new Date());
          });
      }
    });
  }
  //리뷰에 좋아요를 누르거나 삭제하는 함수
  function reviewLike() {
    if (!isLiked) {
      authAxios
        .post(`/users/${userId}/review-likes`, {
          reviewId: reviewData.reviewId,
        })
        .then(() => {
          setReRequest(new Date());
        });
    } else {
      authAxios
        .delete(`/users/my/review-likes/${isLiked.reviewLikeId}`)
        .then(() => {
          setReRequest(new Date());
        });
    }
  }

  return (
    <>
      <S.ReviewDiv>
        {/* 컬럼1 유저 프사, 이름, 닉네임 삭제버튼, 수정버튼 등이 들어감 */}
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
          {reviewData.id === strId && (
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
        {/* 컬럼 2 유저가 쓴 글이 들어감 */}
        <S.ReviewColumnDiv
          $height="100px"
          onClick={setReviewModal}
          $cursor="pointer"
        >
          <S.ReviewRowDiv
            $fontSize={reviewData.text.length >= 150 ? '15px' : '20px'}
            $cursor="pointer"
          >
            {reviewData.text}
          </S.ReviewRowDiv>
        </S.ReviewColumnDiv>
        {/*리뷰 자세히보기 모달창 띄우는 로직*/}
        {reviewModal && (
          <CommentModal
            toggleModal={setReviewModal}
            reviewData={reviewData}
            isLiked={isLiked}
            reviewLike={reviewLike}
          ></CommentModal>
        )}
        {/*수정버튼 눌렀을때 모달창 띄우는 로직 */}
        {editModal && (
          <ReviewModal
            toggleReviewModal={setEditModal}
            textValue={reviewData.text}
            mod="edit"
            reviewId={reviewData.reviewId}
          ></ReviewModal>
        )}
        {/* 컬럼3 날짜 */}
        <S.ReviewColumnDiv $justifyContent="flex-end">
          <S.ReviewRowDiv>({reviewData.date.slice(0, 10)})</S.ReviewRowDiv>
        </S.ReviewColumnDiv>
        {/* 컬럼4 밑줄 */}
        <S.Hr $bgColor="#000" $width="100%" $margin="10px 0px 10px 0px"></S.Hr>
        {/* 좋아요버튼 로직 */}
        {/* 컬럼5 좋아요버튼, 댓글 수 */}
        <S.ReviewColumnDiv>
          <S.ReviewRowDiv $marginRight="20px">
            <S.ReviewImg
              src={`${baseUrl}favorite${isLiked ? 'On' : 'Off'}.png`}
              onClick={reviewLike}
            />
          </S.ReviewRowDiv>
          <S.ReviewRowDiv $marginRight="20px">
            <div>{reviewData.likeCount}</div>
          </S.ReviewRowDiv>
          <S.ReviewRowDiv
            $marginRight="20px"
            $cursor="pointer"
            onClick={setReviewModal}
          >
            <div>댓글 </div>
            &nbsp; &nbsp;
            <div> {reviewData.commentCount}</div>
          </S.ReviewRowDiv>
        </S.ReviewColumnDiv>
      </S.ReviewDiv>
    </>
  );
}
