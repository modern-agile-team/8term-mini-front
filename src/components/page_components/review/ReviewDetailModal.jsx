import Comment from './Comment';
import * as S from './ReviewStyled';
import PagiNation from './../../public_components/PagiNation';
import { useState, useEffect, useContext } from 'react';
import { basicAxios } from '../../../axios/instance';
import AddComment from './AddComment.jsx';
import { ReFetchContext } from './ReviewContext.js';

export default function ReviewDetailModal({
  reviewData,
  toggleModal,
  isLiked,
  reviewLike,
}) {
  const [comments, setCommnets] = useState();
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const { reRequest } = useContext(ReFetchContext);
  const baseUrl = import.meta.env.VITE_IMG_BASE_URL;
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    basicAxios
      .get(`/reviews/${reviewData.review_id}/comments?page=${page}`)
      .then(data => {
        setTotalCount(data.totalCount);
        setCommnets(data.data);
      });
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [reRequest, page]);

  if (!comments) return <div>Loding...</div>;
  return (
    <>
      <S.ModalContainer
        id="rootModal"
        onClick={e => {
          if (e.target.id === 'rootModal') {
            toggleModal();
          }
        }}
      >
        <S.ModalContent>
          <S.ReviewDiv $marginBottom="0px" $padding="0px" $width="100%">
            {/*컬럼1 유저 프사, 닉네임, 아이디 일부가 들어가는 행*/}
            <S.ReviewColumnDiv>
              <S.ReviewRowDiv $marginRight="7px">
                <S.ReviewImg src={`${baseUrl}profileimg.png`}></S.ReviewImg>
              </S.ReviewRowDiv>
              <S.ReviewRowDiv $fontSize="20px" $marginRight="7px">
                {reviewData.nickname}
              </S.ReviewRowDiv>
              <S.ReviewRowDiv $color="#8D8D8D">
                ({reviewData.id.slice(0, 3)}*****)
              </S.ReviewRowDiv>
            </S.ReviewColumnDiv>
            {/* 컬럼2 유저가 쓴 글이 들어감 */}
            <S.ReviewColumnDiv $height="100%">
              <S.ReviewRowDiv
                $fontSize={reviewData.text.length >= 150 ? '15px' : '20px'}
              >
                {reviewData.text}
              </S.ReviewRowDiv>
            </S.ReviewColumnDiv>
            {/* 컬럼3 날짜 */}
            <S.ReviewColumnDiv $justifyContent="flex-end">
              <S.ReviewRowDiv>({reviewData.date.slice(0, 10)})</S.ReviewRowDiv>
            </S.ReviewColumnDiv>
            {/* 컬럼4 밑줄 */}
            <S.Hr
              $bgColor="#000"
              $width="100%"
              $margin="10px 0px 10px 0px"
            ></S.Hr>
            {/* 컬럼5 좋아요, 댓글수 */}
            <S.ReviewColumnDiv>
              <S.ReviewRowDiv $marginRight="20px">
                <S.ReviewImg
                  src={`${baseUrl}favorite${isLiked ? 'On' : 'Off'}.png`}
                  onClick={reviewLike}
                />
              </S.ReviewRowDiv>
              <S.ReviewRowDiv $marginRight="20px">
                <div>{reviewData.like_count}</div>
              </S.ReviewRowDiv>
              <S.ReviewRowDiv $marginRight="20px" onClick={toggleModal}>
                <div>댓글</div>
              </S.ReviewRowDiv>
              <S.ReviewRowDiv onClick={toggleModal}>
                <div>{reviewData.comment_count}</div>
              </S.ReviewRowDiv>
            </S.ReviewColumnDiv>
          </S.ReviewDiv>
          <p></p>
          {/*리뷰정보 띄우기*/}

          {/*댓글정보 띄우기*/}
          <S.CommentContainerDiv>
            {comments.map(val => (
              <Comment key={val.comment_id} commentData={val} />
            ))}
          </S.CommentContainerDiv>
          <PagiNation
            setPage={setPage}
            totalItems={totalCount || 1}
            color="black"
            size={5}
          />
          <AddComment reviewId={reviewData.review_id}></AddComment>
        </S.ModalContent>
      </S.ModalContainer>
    </>
  );
}
