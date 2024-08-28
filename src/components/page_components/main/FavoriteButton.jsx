import { authAxios } from '../../../axios/instance';
import * as S from './MainStyled';
import { useEffect, useState } from 'react';
import { confirmWishListAlert } from '../../public_components/Alert';
import getUserInfo from '../../../function/getUserInfo';
export default function FavoriteButton({
  wishData,
  movieName,
  movieId,
  setReRequest,
}) {
  //찜데이터가 있으면 찜데이터 저장(true) 아님 false
  const [isLiked, setisLiked] = useState(wishData || false);
  useEffect(() => {
    setisLiked(wishData || false);
  }, [wishData]);
  const wishListId = typeof wishData === 'object' ? wishData.wishListId : null;
  const baseUrl = import.meta.env.VITE_IMG_BASE_URL;
  const [userId] = getUserInfo();
  async function toggleLiked() {
    //찜상태가 아닐때 찜 요청 보내기
    if (!isLiked) {
      confirmWishListAlert(movieName, isLiked).then(res => {
        if (res.isConfirmed) {
          authAxios
            .post(`users/${userId}/wish-lists`, {
              movieId: movieId,
            })
            .then(res => {
              setReRequest(new Date());
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
      console.log(wishListId);
      if (res.isConfirmed) {
        authAxios
          .delete(`/users/my/wish-lists/${wishListId}`)
          .then(() => {
            setisLiked(!isLiked);
          })
          .catch(err => {
            console.error(err);
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
