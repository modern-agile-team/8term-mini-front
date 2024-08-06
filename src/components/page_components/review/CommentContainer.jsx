import Comment from './Comment';
import * as S from './ReviewStyled';
import PagiNation from './../../public_components/PagiNation';

export default function ReviewComment({ comments }) {
  return (
    <>
      <S.CommentContainerDiv>
        {comments.map(val => (
          <Comment key={val.comment_id} comment={val} />
        ))}
      </S.CommentContainerDiv>
      <PagiNation
        styled={{ $color: '#000', $width: '600px', $fontSize: '12px' }}
      />
      <S.ReviewColumnDiv $padding="50px 80px 0px 80px" $justifyContent="center">
        <S.CommentInput type="text"></S.CommentInput>
        <S.AddBtn>+ 댓글 쓰기</S.AddBtn>
      </S.ReviewColumnDiv>
    </>
  );
}
