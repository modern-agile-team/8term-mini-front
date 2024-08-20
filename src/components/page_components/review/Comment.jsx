import { useContext } from 'react';
import { authAxios } from '../../../axios/instance';
import getUserInfo from '../../../function/getUserInfo';
import * as S from './ReviewStyled';
import { ReFetchContext } from './ReviewContext';
import { confirmDeleteAlert } from '../../public_components/Alert';
export default function Comment({ commentData }) {
  const baseUrl = import.meta.env.VITE_IMG_BASE_URL;
  const [userId] = getUserInfo();
  const { setReRequest } = useContext(ReFetchContext);
  function deleteComment() {
    confirmDeleteAlert('댓글을 삭제하시겠습니까?').then(confirm => {
      if (confirm.isConfirmed) {
        authAxios
          .delete(`/users/my/comments/${commentData.comment_id}`)
          .then(() => setReRequest(new Date()));
      }
    });
  }
  console.log(commentData);
  return (
    <>
      <S.ReviewColumnDiv>
        <S.ReviewRowDiv $fontSize="16px" $marginRight="7px">
          {commentData.nickName}
        </S.ReviewRowDiv>
        <S.ReviewRowDiv $color="#8D8D8D" $fontWeight="400" $marginRight="100px">
          ({commentData.id}*****)
        </S.ReviewRowDiv>
        <S.ReviewRowDiv
          $aliginSelf="center"
          $marginRight="auto"
          $fontWeight="400"
        >
          {commentData.text}
        </S.ReviewRowDiv>
        {commentData.user_id === userId && (
          <S.DeleteImg
            src={`${baseUrl}delete.png`}
            $marginRight="25px"
            onClick={deleteComment}
          ></S.DeleteImg>
        )}

        <S.ReviewRowDiv $color="#8D8D8D" $fontWeight="400" $fontSize="10px">
          ({commentData.date.slice(0, 10)})
        </S.ReviewRowDiv>
      </S.ReviewColumnDiv>
      <S.Hr $bgColor="#000" $margin="15px 0px 10px 0px" $width="100%"></S.Hr>
    </>
  );
}
