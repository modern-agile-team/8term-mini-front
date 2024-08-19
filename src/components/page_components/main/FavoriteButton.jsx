import { authAxios } from '../../../axios/instance';
import * as S from './MainStyled';
import { useState } from 'react';
import { confirmWishListAlert } from '../../public_components/Alert';
export default function FavoriteButton({ likeData, movieName }) {
  //true면 찜상태 false면 안좋아요상태
  const [isLiked, setisLiked] = useState(likeData || false);
  const baseUrl = import.meta.env.VITE_IMG_BASE_URL;
  const movieId = likeData ? likeData.movie_id : '';
  const likeId = likeData ? likeData.wish_list_id : '';
  const userId = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).user_id
    : null;

  async function toggleLiked() {
    //찜상태가 아닐때 좋아요 요청 보내기
    if (!isLiked) {
      confirmWishListAlert(movieName, isLiked).then(res => {
        if (res.isConfirmed) {
          authAxios
            .post(`users/${userId}/wish-lists`, {
              movie_id: movieId,
            })
            .then(() => {
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
      if (res.isConfirmed) {
        authAxios.delete(`/users/my/wish-lists/${likeId}`);
        setisLiked(!isLiked);
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
