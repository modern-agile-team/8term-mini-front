import { useState } from 'react';
import PagiNation from '../../public_components/PagiNation.jsx';
import Review from './Review.jsx';
import * as S from './ReviewStyled.js';
import { ReviewModal } from './ReviewModal.jsx';

export default function ReviewContainer() {
  const testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [addReviewModal, setAddReviewModal] = useState(false);
  function toggleaddReviewModal() {
    setAddReviewModal(!addReviewModal);
  }
  return (
    <>
      <S.ReviewHeaderDiv>
        <S.ReviewTextDiv>review</S.ReviewTextDiv>
        <S.ReviewAddButton onClick={toggleaddReviewModal}>
          +리뷰 쓰기
        </S.ReviewAddButton>
      </S.ReviewHeaderDiv>
      {addReviewModal && (
        <ReviewModal toggleModal={toggleaddReviewModal} mod={'addReview'} />
      )}

      <S.ReviewContainer>
        <S.Hr></S.Hr>
        {testArr.map(val => (
          <Review key={val}>리뷰1</Review>
        ))}
        <PagiNation styled={{ $color: '#f7f9f3' }}></PagiNation>
      </S.ReviewContainer>
    </>
  );
}
