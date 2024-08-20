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
  //영화 아이디 가져오기
  const { id } = useParams();
  //리뷰 데이터 state
  const [reviews, setReviews] = useState([]);
  //리뷰쓰기 모달창 띄웠는지 안 띄웠는지 토글
  const [addReviewModal, setAddReviewModal] = useToggle();
  //재요청 상태
  const [reRequest, setReRequest] = useState(0);
  //좋아요 표시여부 토글
  const [displayReviewLike, setdisplayReviewLike] = useState([]);
  //몇페이지인지 초기에는 1
  const [page, setPage] = useState(1);
  //총 리뷰 수
  const [totalItems, setTotalItems] = useState(0);
  //로컬스토리지에서 유저정보 받아옴
  const userId = JSON.parse(localStorage.getItem('user'))
    ? JSON.parse(localStorage.getItem('user')).user_id
    : null;
  useEffect(() => {
    //n페이지에 대한 요청을 보냄 n페이지에 대한 정보와 총 데이터 수를 받음
    basicAxios.get(`/movies/${id}/reviews/?page=${page}`).then(data => {
      setTotalItems(data.totalPages);
      setReviews(data.data);
    });
    //로그인되어있으면 좋아요한 리뷰 가져옴 토큰없으면 에러발생
    authAxios
      .get(`/users/${userId}/review-likes`)
      .then(data => {
        setdisplayReviewLike(data.data);
      })
      .catch(err => console.error('좋아요 불러오기 실패', err));
    //재요청 발생이나 페이지가 바뀌면 해당되는것들 다시 받아옴
  }, [reRequest, page]);
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
        <PagiNation
          styled={{ $color: '#f7f9f3' }}
          totalItems={totalItems || 1}
          setPage={setPage}
        ></PagiNation>
      </S.ReviewContainer>
    </>
  );
}
