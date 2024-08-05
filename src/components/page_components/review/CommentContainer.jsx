import Comment from './Comment';
import * as S from './ReviewStyled';
export default function ReviewComment() {
  const testArr = [0, 1, 2, 3, 4];
  return (
    <S.CommentContainerDiv>
      {testArr.map(val => (
        <Comment key={val} />
      ))}
    </S.CommentContainerDiv>
  );
}
