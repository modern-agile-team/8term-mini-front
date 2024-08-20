import { useEffect, useState, createContext } from 'react';
import PagiNation from '../../public_components/PagiNation.jsx';
import Review from './Review.jsx';
import * as S from './ReviewStyled.js';
import { useParams } from 'react-router-dom';
import AddReview from './AddReview.jsx';
import { basicAxios, authAxios } from '../../../axios/instance.js';
import { ReFetchContext } from './ReviewContext.js';
import getUserInfo from '../../../function/getUserInfo.js';
export default function ReviewContainer() {
  //영화 아이디 가져오기
  const { id } = useParams();
  //리뷰 데이터 state
  const [reviews, setReviews] = useState([]);
  //리뷰쓰기 모달창 띄웠는지 안 띄웠는지 토글
  //재요청 상태
  const [reRequest, setReRequest] = useState(0);
  //좋아요 표시여부 토글
  const [ReviewLikeList, setReviewLikeList] = useState([]);
  //몇페이지인지 초기에는 1
  const [page, setPage] = useState(1);
  //총 리뷰 수
  const [totalItems, setTotalItems] = useState(0);
  //로컬스토리지에서 유저정보 받아옴
  const [intId] = getUserInfo();
  useEffect(() => {
    //n페이지에 대한 요청을 보냄 n페이지에 대한 정보와 총 데이터 수를 받음
    basicAxios.get(`/movies/${id}/reviews/?page=${page}`).then(data => {
      //데이터 총 수
      setTotalItems(data.totalPages);
      //리뷰데이터
      setReviews(data.data);
    });
    //로그인되어있으면 좋아요한 리뷰 가져옴 토큰없으면 에러발생
    authAxios
      .get(`/users/${intId}/review-likes`)
      .then(data => {
        //유저가 어디에 좋아요 했는지
        setReviewLikeList(data.data);
      })
      .catch(err => console.error('좋아요 불러오기 실패', err));
    //재요청 발생이나 페이지가 바뀌면 해당되는것들 다시 받아옴
  }, [reRequest, page]);
  return (
    <>
      <ReFetchContext.Provider value={{ reRequest, setReRequest }}>
        <AddReview setReRequest={setReRequest}></AddReview>
        <S.ReviewContainer>
          <S.Hr></S.Hr>
          {/* 리뷰 값, 모달창인지 아닌지, 다시 요청보내는 setreRequest함수 자기가 좋아요한 리뷰 정보 보냄 */}
          {reviews &&
            reviews.map(val => (
              <Review
                key={val.review_id}
                reviewData={val}
                isModal={true}
                isLiked={ReviewLikeList.find(
                  ele => ele.review_id === Number(val.review_id)
                )}
              />
            ))}
          <PagiNation
            styled={{ $color: '#f7f9f3' }}
            totalItems={totalItems || 1}
            setPage={setPage}
          ></PagiNation>
        </S.ReviewContainer>
      </ReFetchContext.Provider>
    </>
  );
}
