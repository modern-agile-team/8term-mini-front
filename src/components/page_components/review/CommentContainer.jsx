import Comment from './Comment';
import * as S from './ReviewStyled';
import PagiNation from './../../public_components/PagiNation';
export default function ReviewComment() {
  const testArr = [0, 1, 2, 3, 4];
  return (
    <>
      <S.CommentContainerDiv>
        {testArr.map(val => (
          <Comment key={val} />
        ))}
      </S.CommentContainerDiv>
      <PagiNation
        styled={{ $color: '#000', $width: '600px', $fontSize: '12px' }}
      />
      <S.ReviewColumnDiv $padding="40px 40px 0px 40px">
        <S.CommentInput type="text"></S.CommentInput>
        <S.CommentAddBtn>+ 댓글 쓰기</S.CommentAddBtn>
      </S.ReviewColumnDiv>
    </>
  );
}
