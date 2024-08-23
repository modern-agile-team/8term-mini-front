import { authAxios } from '../../../../axios/instance';
import getUserInfo from '../../../../function/getUserInfo';
import * as S from '../ReviewStyled';
import { confirmDeleteAlert } from '../../../public_components/Alert';
export default function Comment({ commentData, setcommentRerequest }) {
  console.log(commentData);
  const baseUrl = import.meta.env.VITE_IMG_BASE_URL;
  const [userId, userStrId] = getUserInfo();
  function deleteComment() {
    confirmDeleteAlert('댓글을 삭제하시겠습니까?').then(confirm => {
      if (confirm.isConfirmed) {
        authAxios
          .delete(`/users/my/comments/${commentData.commentId}`)
          .then(() => setcommentRerequest(new Date()));
      }
    });
  }
  return (
    <>
      <S.ReviewColumnDiv>
        <S.ReviewRowDiv $fontSize="16px" $marginRight="7px">
          {commentData.nickname}
        </S.ReviewRowDiv>
        <S.ReviewRowDiv $color="#8D8D8D" $fontWeight="400" $marginRight="100px">
          ({commentData.id.slice(0, 3)}*****)
        </S.ReviewRowDiv>
        <S.ReviewRowDiv
          $aliginSelf="center"
          $marginRight="auto"
          $fontWeight="400"
        >
          {commentData.text}
        </S.ReviewRowDiv>
        {commentData.id === userStrId && (
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
