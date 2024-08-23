import * as S from './ReviewStyled.js';
import ReviewModal from './ReviewModal';
import useToggle from '../../../hooks/useToggle.js';
import { confirmLoginAlert } from '../../public_components/Alert.jsx';
/** @리뷰창의 헤더부분  */
export default function ReviewHeader() {
  const [toggleModal, setToggleModal] = useToggle();
  function toggleaddReviewModal() {
    //쓰기 모달창 띄우기 전에 유저가 있는지 검사
    if (localStorage.getItem('user') === null) {
      confirmLoginAlert(
        '로그인 필요',
        '로그인이 필요한 기능입니다.',
        '로그인 페이지 이동',
        '확인'
      );
      return;
    }
    setToggleModal();
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
        <ReviewModal toggleReviewModal={setToggleModal} mod="add" />
      )}
    </>
  );
}
