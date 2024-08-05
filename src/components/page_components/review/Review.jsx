import * as S from './ReviewStyled.js';
import favoriteOff from '/favoriteOff.png';
import favoriteOn from '/favoriteOn.png';
import { useState } from 'react';
export default function Review() {
  const [isLiked, setisLiked] = useState(false);

  function toggleLiked() {
    setisLiked(!isLiked);
  }

  return (
    <>
      <S.ReviewDiv>
        <S.ReviewColumnDiv>
          <img src=""></img>
          <S.ReviewRowDiv $fontSize="20px" $marginRight="7px">
            닉네임{' '}
          </S.ReviewRowDiv>
          <S.ReviewRowDiv $color="#8D8D8D" $fontWeight="400">
            (qwe12****)
          </S.ReviewRowDiv>
        </S.ReviewColumnDiv>
        <S.ReviewColumnDiv $height="100px">
          <S.ReviewRowDiv $fontSize="20px">
            리뷰내용ㅁㄴㅇㅁㄴㅇㅁ
          </S.ReviewRowDiv>
        </S.ReviewColumnDiv>
        <S.ReviewColumnDiv $justifyContent="flex-end">
          (2024/08/12)
        </S.ReviewColumnDiv>

        <S.Hr $marginBottom="0px" width="100%"></S.Hr>
        <S.ReviewColumnDiv>
          <S.ReviewRowDiv $marginRight="20px">
            <div>하트</div>
          </S.ReviewRowDiv>
          <S.ReviewRowDiv $marginRight="20px" $fontWeight="800">
            <div>20</div>
          </S.ReviewRowDiv>
          <S.ReviewRowDiv $marginRight="20px">
            <div>댓글</div>
          </S.ReviewRowDiv>
          <S.ReviewRowDiv $fontWeight="800">
            <div>11</div>
          </S.ReviewRowDiv>
        </S.ReviewColumnDiv>
      </S.ReviewDiv>
    </>
  );
}
