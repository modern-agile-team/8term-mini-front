import * as S from '../ReviewStyled.js';
import { warningAlert } from '../../../public_components/Alert.jsx';
import { authAxios } from '../../../../axios/instance';
import { useRef } from 'react';
import getUserInfo from '../../../../function/getUserInfo.js';
import textValidation from '../../../../function/textValidation.js';
import { useThrottle } from '../../../../hooks/useThrottle.js';
/** @댓글추가컴포넌트 특정 리뷰 아이디를 받아서 리뷰의 댓글을 쓸 수 있음 */
export default function AddComment({ reviewId, setcommentRerequest }) {
  const inputRef = useRef();
  const [userId] = getUserInfo();
  const postComment = useThrottle(
    () => {
      textValidation(inputRef.current.value, 50);
      //인증필요 요청
      authAxios
        .post(`/reviews/${reviewId}/comments`, {
          userId: userId,
          text: inputRef.current.value,
        })
        .then(() => {
          setcommentRerequest(new Date());
          inputRef.current.value = '';
        })
        .catch(err => {
          warningAlert(err.data);
        });
    },
    5000,
    s => {
      warningAlert(
        '연속으로 작성할 수 없습니다.',
        `${s}초 뒤에 작성가능합니다.`
      );
    }
  );
  //댓글추가 함수

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
