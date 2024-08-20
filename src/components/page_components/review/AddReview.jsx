import * as S from './ReviewStyled.js';
import ReviewModal from './ReviewModal';
import { useState } from 'react';
export default function AddReview({ setReRequest }) {
  const [toggleModal, setToggleModal] = useState(false);
  function toggleaddReviewModal() {
    if (localStorage.getItem('user') === null) {
      confirmLoginAlert(
        '로그인 필요',
        '로그인이 필요한 기능입니다.',
        '로그인 페이지 이동',
        '확인'
      );
      return;
    }
    setToggleModal(!toggleModal);
  }
  return (
    <>
      <S.ReviewHeaderDiv>
        <S.ReviewTextDiv>review</S.ReviewTextDiv>
        <S.ReviewAddButton onClick={toggleaddReviewModal}>
          +리뷰 쓰기
        </S.ReviewAddButton>
      </S.ReviewHeaderDiv>

      {/*쓰기모드로 리뷰 모달창 띄움 */}
      {toggleModal && (
        <ReviewModal
          toggleaddReviewModal={toggleaddReviewModal}
          setReRequest={setReRequest}
          mod="add"
        />
      )}
    </>
  );
}
