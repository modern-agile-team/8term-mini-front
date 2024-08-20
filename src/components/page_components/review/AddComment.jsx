import * as S from './ReviewStyled.js';
import {
  confirmLoginAlert,
  warningAlert,
} from '../../public_components/Alert.jsx';
import { authAxios } from '../../../axios/instance';
import { useContext, useRef } from 'react';
import getUserInfo from '../../../function/getUserInfo.js';
import { ReFetchContext } from './ReviewContext.js';
export default function AddComment({ reviewId }) {
  const { setReRequest } = useContext(ReFetchContext);
  const inputRef = useRef();
  const [userId] = getUserInfo();
  //댓글추가 함수
  function postComment() {
    if (!inputRef.current.value) {
      warningAlert('입력값 없음', '텍스트를 입력해주세요');
      return;
    }
    //인증필요 요청
    authAxios
      .post(`/reviews/${reviewId}/comments`, {
        userId: userId,
        text: inputRef.current.value,
        reviewId: reviewId,
      })
      .then(() => {
        setReRequest(new Date());
        inputRef.current.value = '';
      })
      .catch(err => console.error(err));
  }
  return (
    <S.ReviewColumnDiv $padding="30px 80px 0px 80px" $justifyContent="center">
      <S.CommentInput
        type="text"
        ref={inputRef}
        onKeyPress={e => {
          if (e.code === 'Enter') {
            postComment();
          }
        }}
      ></S.CommentInput>
      <S.AddBtn onClick={postComment}>+ 댓글 쓰기</S.AddBtn>
    </S.ReviewColumnDiv>
  );
}
