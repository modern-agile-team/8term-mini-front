import * as S from './ReviewStyled';
export default function Comment() {
  return (
    <>
      <S.ReviewColumnDiv>
        <S.ReviewRowDiv $fontSize="20px" $marginRight="7px" $fontWeight="600">
          닉네임
        </S.ReviewRowDiv>
        <S.ReviewRowDiv $color="#8D8D8D" $fontWeight="400">
          (qwe12****)
        </S.ReviewRowDiv>
      </S.ReviewColumnDiv>
      <S.Hr
        $marginBottom="10px"
        $bgColor="#000"
        $marginTop="15px"
        $width="100%"
      ></S.Hr>
    </>
  );
}
