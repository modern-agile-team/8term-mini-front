import Review from './Review';
import * as S from './ReviewStyled';
import CommentContainer from './CommentContainer';
import { useState, useEffect } from 'react';

export function ReviewModal({ toggleModal, reviews }) {
  const [comments, setCommnets] = useState();
  useEffect(() => {
    fetch(`/reviews/${reviews.review_id}/comment`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => setCommnets(data));
  }, []);

  if (!comments) return <div>Loding...</div>;
  return (
    <S.ModalContainer
      id="rootModal"
      onClick={e => {
        if (e.target.id === 'rootModal') {
          toggleModal();
        }
      }}
    >
      <S.ModalContent>
        <Review
          styled={{ $padding: '0px', $width: '100%', $marginBottom: '30px' }}
          reviews={reviews}
          isModal={false}
        ></Review>
        <CommentContainer comments={comments}></CommentContainer>
      </S.ModalContent>
    </S.ModalContainer>
  );
}
