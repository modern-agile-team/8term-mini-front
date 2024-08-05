import Review from './Review';
import * as S from './ReviewStyled';
import CommentContainer from './CommentContainer';
import PagiNation from './../../public_components/PagiNation';
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
        <PagiNation
          styled={{ $color: '#000', $width: '500px', $fontSize: '13px' }}
        />
      </S.ModalContent>
    </S.ModalContainer>
  );
}
