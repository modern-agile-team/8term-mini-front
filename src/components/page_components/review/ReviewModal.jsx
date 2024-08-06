import Review from './Review';
import * as S from './ReviewStyled';
import CommentContainer from './CommentContainer';
import AddReview from './AddReview';

export function ReviewModal({ toggleModal, mod }) {
  return (
    <S.ModalContainer
      id="rootModal"
      onClick={e => {
        if (e.target.id === 'rootModal') {
          toggleModal();
        }
      }}
    >
      {mod === 'addReview' ? (
        <S.ModalContent>
          <AddReview></AddReview>
        </S.ModalContent>
      ) : (
        <S.ModalContent>
          <Review
            styled={{ $padding: '0px', $width: '100%', $marginBottom: '30px' }}
          ></Review>
          <CommentContainer></CommentContainer>
        </S.ModalContent>
      )}
    </S.ModalContainer>
  );
}
