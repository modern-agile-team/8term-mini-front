import Comment from './Comment';
import * as S from './ReviewStyled';
import PagiNation from './../../public_components/PagiNation';
import { useState, useEffect, useContext } from 'react';
import Review from './Review';
import { basicAxios } from '../../../axios/instance';
import AddComment from './AddComment.jsx';
import { ReFetchContext } from './ReviewContext.js';

export default function ReviewDetailModal({
  reviewData,
  toggleModal,
  isLiked,
}) {
  const [comments, setCommnets] = useState();
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const { reRequest } = useContext(ReFetchContext);
  useEffect(() => {
    basicAxios
      .get(`/reviews/${reviewData.review_id}/comments?page=${page}`)
      .then(data => {
        setTotalItems(data.totalCount);
        setCommnets(data.data);
      });
  }, [reRequest, page]);

  if (!comments) return <div>Loding...</div>;
  return (
    <>
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
            reviewData={reviewData}
            isModal={false}
            isLiked={isLiked}
          ></Review>
          <S.CommentContainerDiv>
            {comments.map(val => (
              <Comment key={val.comment_id} commentData={val} />
            ))}
          </S.CommentContainerDiv>
          <PagiNation
            styled={{ $color: '#000', $width: '600px', $fontSize: '12px' }}
            setPage={setPage}
            totalItems={totalItems || 1}
          />
          <AddComment reviewId={reviewData.review_id}></AddComment>
        </S.ModalContent>
      </S.ModalContainer>
    </>
  );
}
