import Review from './Review';
import * as S from './ReviewStyled';
import CommentContainer from './CommentContainer';

export function ReviewModal({ toggleModal }) {
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
        ></Review>
        <CommentContainer></CommentContainer>
      </S.ModalContent>
    </S.ModalContainer>
  );
}
