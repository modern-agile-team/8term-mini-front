import Comment from './Comment';
import * as S from './ReviewStyled';
import PagiNation from './../../public_components/PagiNation';
import { useRef, useState, useEffect, useContext } from 'react';
import Review from './Review';
import { basicAxios } from '../../../axios/instance';
import {
  confirmLoginAlert,
  warningAlert,
} from '../../public_components/Alert.jsx';

export default function ReviewDetailModal({
  reviews,
  toggleModal,
  setReRequest,
  reRequest,
  isLiked,
}) {
  const inputRef = useRef();
  const [comments, setCommnets] = useState();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    basicAxios
      .get(`/reviews/${reviews.review_id}/comment`)
      .then(data => setCommnets(data));
  }, [reRequest]);

  function addCommnet() {
    if (localStorage.getItem('user') === null) {
      return confirmLoginAlert(
        '로그인 필요',
        '로그인이 필요한 기능입니다.',
        '로그인 페이지 이동',
        '확인'
      );
    }
    if (!inputRef.current.value) {
      warningAlert('입력값 없음', '텍스트를 입력해주세요');
      return;
    }

    basicAxios
      .post(`/reviews/${reviews.review_id}/comment`, {
        text: inputRef.current.value,
        review_id: reviews.review_id,
        user_id: user.user_id,
        nickName: user.nickName,
        id: user.id,
      })
      .then(() => {
        setReRequest(new Date());
        inputRef.current.value = '';
      });
  }
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
            reviews={reviews}
            isModal={false}
            isLiked={isLiked}
            setReRequest={setReRequest}
          ></Review>
          <S.CommentContainerDiv>
            {comments.map(val => (
              <Comment
                key={val.comment_id}
                comment={val}
                setReRequest={setReRequest}
              />
            ))}
          </S.CommentContainerDiv>
          <PagiNation
            styled={{ $color: '#000', $width: '600px', $fontSize: '12px' }}
          />
          <S.ReviewColumnDiv
            $padding="50px 80px 0px 80px"
            $justifyContent="center"
          >
            <S.CommentInput
              type="text"
              ref={inputRef}
              onKeyPress={e => {
                if (e.code === 'Enter') {
                  addCommnet();
                }
              }}
            ></S.CommentInput>
            <S.AddBtn onClick={addCommnet}>+ 댓글 쓰기</S.AddBtn>
          </S.ReviewColumnDiv>
        </S.ModalContent>
      </S.ModalContainer>
    </>
  );
}
