import * as S from './ReviewStyled.js';
export default function Review() {
  return (
    <>
      <S.ReviewDiv>
        <S.ReviewColumnDiv>
          <div>프사</div>
          <div>닉네임</div>
          <div>(qwe12****)</div>
        </S.ReviewColumnDiv>
        <S.ReviewColumnDiv>
          <div>리뷰내용ㅁㄴㅇㅁㄴㅇㅁ</div>
        </S.ReviewColumnDiv>
        <S.ReviewColumnDiv>(날짜)</S.ReviewColumnDiv>
        <hr></hr>
        <S.ReviewColumnDiv>
          <div>하트</div>
          <div>좋아요몇개인지</div>
          <div>댓글</div>
          <div>댓글몇개인지</div>
        </S.ReviewColumnDiv>
      </S.ReviewDiv>
    </>
  );
}
