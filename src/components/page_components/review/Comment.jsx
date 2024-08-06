import * as S from './ReviewStyled';
export default function Comment() {
  return (
    <>
      <S.ReviewColumnDiv>
        <S.ReviewRowDiv $fontSize="16px" $marginRight="7px">
          닉네임
        </S.ReviewRowDiv>
        <S.ReviewRowDiv $color="#8D8D8D" $fontWeight="400" $marginRight="100px">
          (qwe12****)
        </S.ReviewRowDiv>
        <S.ReviewRowDiv $aliginSelf="center" $marginRight="auto">
          내용
        </S.ReviewRowDiv>
        <S.ReviewRowDiv $color="#8D8D8D" $fontWeight="400" $fontSize="10px">
          (2024/2/23)
        </S.ReviewRowDiv>
      </S.ReviewColumnDiv>
      <S.Hr $bgColor="#000" $margin="15px 0px 10px 0px" $width="100%"></S.Hr>
    </>
  );
}
