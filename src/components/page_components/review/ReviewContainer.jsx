import { useEffect, useState } from 'react';
import PagiNation from '../../public_components/PagiNation.jsx';
import Review from './Review.jsx';
import * as S from './ReviewStyled.js';
import { useParams } from 'react-router-dom';
import AddReviewModal from './AddReviewModal.jsx';

export default function ReviewContainer() {
  const { id } = useParams();
  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetch(`/movies/${id}/reviews`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  const [addReviewModal, setAddReviewModal] = useState(false);
  function toggleaddReviewModal() {
    setAddReviewModal(!addReviewModal);
  }
  if (!reviews) return <div>Loding...</div>;
  return (
    <>
      <S.ReviewHeaderDiv>
        <S.ReviewTextDiv>review</S.ReviewTextDiv>
        <S.ReviewAddButton onClick={toggleaddReviewModal}>
          +리뷰 쓰기
        </S.ReviewAddButton>
      </S.ReviewHeaderDiv>
      {addReviewModal && (
        <AddReviewModal toggleaddReviewModal={toggleaddReviewModal} />
      )}

      <S.ReviewContainer>
        <S.Hr></S.Hr>
        {reviews.map(val => (
          <Review key={val.review_id} reviews={val} isModal={true} />
        ))}
        <PagiNation styled={{ $color: '#f7f9f3' }}></PagiNation>
      </S.ReviewContainer>
    </>
  );
}
