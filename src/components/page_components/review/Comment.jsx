import { authAxios } from '../../../axios/instance';
import * as S from './ReviewStyled';

export default function Comment({ comment, setReRequest }) {
  const baseUrl = import.meta.env.VITE_IMG_BASE_URL;
  const userId = JSON.parse(localStorage.getItem('user')).user_id || undefined;
  function deleteComment() {
    authAxios
      .delete(`/users/my/comments/${comment.comment_id}`)
      .then(() => setReRequest(new Date()));
  }
  return (
    <>
      <S.ReviewColumnDiv>
        <S.ReviewRowDiv $fontSize="16px" $marginRight="7px">
          {comment.nickName}
        </S.ReviewRowDiv>
        <S.ReviewRowDiv $color="#8D8D8D" $fontWeight="400" $marginRight="100px">
          ({comment.id}*****)
        </S.ReviewRowDiv>
        <S.ReviewRowDiv
          $aliginSelf="center"
          $marginRight="auto"
          $fontWeight="400"
        >
          {comment.text}
        </S.ReviewRowDiv>
        {comment.user_id === userId && (
          <S.DeleteImg
            src={`${baseUrl}delete.png`}
            $marginRight="25px"
            onClick={deleteComment}
          ></S.DeleteImg>
        )}

        <S.ReviewRowDiv $color="#8D8D8D" $fontWeight="400" $fontSize="10px">
          ({comment.date})
        </S.ReviewRowDiv>
      </S.ReviewColumnDiv>
      <S.Hr $bgColor="#000" $margin="15px 0px 10px 0px" $width="100%"></S.Hr>
    </>
  );
}
