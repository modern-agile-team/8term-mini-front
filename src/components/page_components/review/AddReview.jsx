import * as S from './ReviewStyled';
import profileimg from '/profileimg.png';
export default function AddReview() {
  return (
    <>
      <S.ReviewColumnDiv>
        <S.ReviewRowDiv $marginRight="7px">
          <S.ReviewImg src={profileimg}></S.ReviewImg>
        </S.ReviewRowDiv>
        <S.ReviewRowDiv $fontSize="20px" $marginRight="7px">
          닉네임
        </S.ReviewRowDiv>
        <S.ReviewRowDiv $color="#8D8D8D" $fontWeight="400" $marginRight="auto">
          (qwe12****)
        </S.ReviewRowDiv>
        <S.AddBtn $height="35px" $width="90px">
          저장
        </S.AddBtn>
      </S.ReviewColumnDiv>
      <S.Hr $bgColor="#000000" $width="100%" $margin="12px 0 40px 0"></S.Hr>
      <S.InputTextArea></S.InputTextArea>
    </>
  );
}
