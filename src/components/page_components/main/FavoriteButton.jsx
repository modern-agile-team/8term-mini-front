import { authAxios } from '../../../axios/instance';
import * as S from './MainStyled';
import { useState } from 'react';
import { confirmWishListAlert } from '../../public_components/Alert';
import getUserInfo from '../../../function/getUserInfo';
export default function FavoriteButton({ likeData, movieName, movieId }) {
  //true면 찜상태 false면 안좋아요상태
  console.log(likeData);
  const [isLiked, setisLiked] = useState(likeData || false);
  const baseUrl = import.meta.env.VITE_IMG_BASE_URL;
  const [userId] = getUserInfo();
  async function toggleLiked() {
    //찜상태가 아닐때 좋아요 요청 보내기
    if (!isLiked) {
      confirmWishListAlert(movieName, isLiked).then(res => {
        if (res.isConfirmed) {
          authAxios
            .post(`users/${userId}/wish-lists`, {})
            .then(res => {
              setisLiked(!isLiked);
            })
            .catch(err => {
              console.error(err);
            });
        }
      });
      return;
    }
    //특정 찜 삭제하기
    confirmWishListAlert(movieName, isLiked).then(res => {
      //찜 삭제 확인 버튼을 눌렀을때 실행
      if (res.isConfirmed) {
        //wishlist데이터를 받아옴
        authAxios.get(`/users/${userId}/wish-lists`).then(res => {
          //filet로 이 유저가 누른 영화의 wishlist ID를 구함
          const wishListId = res.data.filter(
            val => val.user_id === userId && val.movie_id === movieId
          )[0].wish_list_id;
          // 그 아이디로 삭제요청을 보냄
          authAxios.delete(`/users/my/wish-lists/${wishListId}`).then(() => {
            setisLiked(!isLiked);
          });
        });
      }
    });
  }
  return (
    <div onClick={toggleLiked}>
      <S.FavoriteButtonImg
        src={isLiked ? `${baseUrl}favoriteOn.png` : `${baseUrl}favoriteOff.png`}
      ></S.FavoriteButtonImg>
    </div>
  );
}
