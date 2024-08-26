import * as S from '../ReviewStyled.js';
import { warningAlert } from '../../../public_components/Alert.jsx';
import { authAxios } from '../../../../axios/instance';
import { useRef } from 'react';
import getUserInfo from '../../../../function/getUserInfo.js';
import textValidation from '../../../../function/textValidation.js';
/** @댓글추가컴포넌트 특정 리뷰 아이디를 받아서 리뷰의 댓글을 쓸 수 있음 */
export default function AddComment({ reviewId, setcommentRerequest }) {
  const inputRef = useRef();
  const [userId] = getUserInfo();
  //댓글추가 함수
  function postComment() {
    textValidation(inputRef.current.value, 50);
    //인증필요 요청
    authAxios
      .post(`/reviews/${reviewId}/comments`, {
        userId: userId,
        text: inputRef.current.value,
        reviewId: reviewId,
      })
      .then(() => {
        setcommentRerequest(new Date());
        inputRef.current.value = '';
      })
      .catch(err => console.error(err.message));
  }
  return (
    <S.ReviewColumnDiv $padding="20px 80px 0px 80px" $justifyContent="center">
      <S.CommentInput
        type="text"
        ref={inputRef}
        onKeyPress={e => {
          if (e.code === 'Enter') {
            postComment();
          }
        }}
        maxLength={49}
      ></S.CommentInput>
      <S.AddBtn onClick={postComment}>+ 댓글 쓰기</S.AddBtn>
    </S.ReviewColumnDiv>
  );
}
