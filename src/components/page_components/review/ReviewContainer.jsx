import Review from './Review.jsx';
import * as S from './ReviewStyled.js';
export default function ReviewContainer() {
  return (
    <>
      <S.ReviewHeaderDiv>
        <S.ReviewTextDiv>review</S.ReviewTextDiv>
        <S.ReviewAddButton>+리뷰 쓰기</S.ReviewAddButton>
      </S.ReviewHeaderDiv>

      <S.ReviewContainer>
        <S.Hr></S.Hr>
        <Review>리뷰1</Review>
      </S.ReviewContainer>
    </>
  );
}
