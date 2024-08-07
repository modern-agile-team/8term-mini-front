import * as S from './ReviewStyled';

export default function Comment({ comment }) {
  return (
    <>
      <S.ReviewColumnDiv>
        <S.ReviewRowDiv $fontSize="16px" $marginRight="7px">
          {comment.user_id}
        </S.ReviewRowDiv>
        <S.ReviewRowDiv $color="#8D8D8D" $fontWeight="400" $marginRight="100px">
          (qwe12****)
        </S.ReviewRowDiv>
        <S.ReviewRowDiv
          $aliginSelf="center"
          $marginRight="auto"
          $fontWeight="400"
        >
          {comment.text}
        </S.ReviewRowDiv>
        <S.ReviewRowDiv $color="#8D8D8D" $fontWeight="400" $fontSize="10px">
          ({comment.date})
        </S.ReviewRowDiv>
      </S.ReviewColumnDiv>
      <S.Hr $bgColor="#000" $margin="15px 0px 10px 0px" $width="100%"></S.Hr>
    </>
  );
}
