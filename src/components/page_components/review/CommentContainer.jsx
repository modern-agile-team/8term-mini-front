import Comment from './Comment';
import * as S from './ReviewStyled';
import PagiNation from './../../public_components/PagiNation';
import { useRef, useState, useEffect } from 'react';
import Review from './Review';
import axios from 'axios';
export default function CommentContainer({ reviews, toggleModal }) {
  const inputRef = useRef();
  const [comments, setCommnets] = useState();
  useEffect(() => {
    axios
      .get(`/reviews/${reviews.review_id}/comment`)
      .then(({ data }) => setCommnets(data));
  }, []);

  function addCommnet() {
    if (!inputRef.current.value) {
      alert('텍스트가 없어요');
      return;
    }
    axios
      .post(`/reviews/${reviews.review_id}/comment`, {
        text: inputRef.current.value,
      })
      .then(({ data }) => {
        setCommnets([...comments, data]);
        inputRef.current.value = '';
      });
  }
  if (!comments) return <div>Loding...</div>;
  return (
    <>
      <S.ModalContainer
        id="rootModal"
        onClick={e => {
          console.log(e.target.id);
          if (e.target.id === 'rootModal') {
            toggleModal();
          }
        }}
      >
        <S.ModalContent>
          <Review
            styled={{ $padding: '0px', $width: '100%', $marginBottom: '30px' }}
            reviews={reviews}
            isModal={false}
          ></Review>
          <S.CommentContainerDiv>
            {comments.map(val => (
              <Comment key={val.comment_id} comment={val} />
            ))}
          </S.CommentContainerDiv>
          <PagiNation
            styled={{ $color: '#000', $width: '600px', $fontSize: '12px' }}
          />
          <S.ReviewColumnDiv
            $padding="50px 80px 0px 80px"
            $justifyContent="center"
          >
            <S.CommentInput
              type="text"
              ref={inputRef}
              onKeyDown={e => {
                if (e.code === 'Enter') {
                  addCommnet();
                }
              }}
            ></S.CommentInput>
            <S.AddBtn onClick={addCommnet}>+ 댓글 쓰기</S.AddBtn>
          </S.ReviewColumnDiv>
        </S.ModalContent>
      </S.ModalContainer>
    </>
  );
}
