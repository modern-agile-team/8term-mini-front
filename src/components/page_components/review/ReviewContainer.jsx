import { useEffect, useState, createContext } from 'react';
import PagiNation from '../../public_components/PagiNation.jsx';
import Review from './Review.jsx';
import * as S from './ReviewStyled.js';
import { useParams } from 'react-router-dom';
import ReviewModal from './ReviewModal.jsx';
import { basicAxios, authAxios } from '../../../axios/instance.js';
import { confirmLoginAlert } from '../../public_components/Alert.jsx';
import useToggle from '../../../hooks/useToggle.js';
export default function ReviewContainer() {
  //이거있으면 로그인상태
  localStorage.setItem(
    'user',
    JSON.stringify({ user_id: 1, id: 'rhehfl0101', nickName: 'doyoon' })
  );
  //로그인 해제
  // localStorage.removeItem('user');
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [addReviewModal, setAddReviewModal] = useToggle();
  const [reRequest, setReRequest] = useState(0);
  const [displayReviewLike, setdisplayReviewLike] = useState([]);
  useEffect(() => {
    //영화에대한 리뷰 가져오기
    basicAxios.get(`/movies/${id}/reviews`).then(data => setReviews(data));
    //로그인되어있으면 좋아요한 리뷰 가져옴
    if (localStorage.getItem('user') !== null) {
      authAxios
        .get(
          `/users/${
            JSON.parse(localStorage.getItem('user')).user_id
          }/review-likes`
        )
        .then(data => {
          console.log(data);
          setdisplayReviewLike(data);
        });
    }
  }, [reRequest]);
  //리뷰 쓰기 모달창 함수
  function toggleaddReviewModal() {
    if (localStorage.getItem('user') === null) {
      confirmLoginAlert(
        '로그인 필요',
        '로그인이 필요한 기능입니다.',
        '로그인 페이지 이동',
        '확인'
      );
      return;
    }
    setAddReviewModal();
  }
  if (!reviews) return <div>Loding...</div>;
  return (
    <>
      <S.ReviewHeaderDiv>
        <S.ReviewTextDiv>review</S.ReviewTextDiv>
        <S.ReviewAddButton onClick={toggleaddReviewModal}>
          +리뷰 쓰기
        </S.ReviewAddButton>
      </S.ReviewHeaderDiv>
      {addReviewModal && (
        <ReviewModal
          toggleaddReviewModal={toggleaddReviewModal}
          setReRequest={setReRequest}
          mod="add"
        />
      )}

      <S.ReviewContainer>
        <S.Hr></S.Hr>
        {/* 리뷰 값, 모달창인지 아닌지, 다시 요청보내는 setreRequest함수 자기가 좋아요한 리뷰 정보 보냄 */}
        {reviews.map(val => (
          <Review
            key={val.review_id}
            reviews={val}
            isModal={true}
            reRequest={reRequest}
            setReRequest={setReRequest}
            isLiked={displayReviewLike.includes(Number(val.review_id))}
          />
        ))}
        <PagiNation styled={{ $color: '#f7f9f3' }}></PagiNation>
      </S.ReviewContainer>
    </>
  );
}
