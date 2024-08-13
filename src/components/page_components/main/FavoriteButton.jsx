import * as S from './MainStyled';
import { useState } from 'react';

export default function FavoriteButton() {
  const [isLiked, setisLiked] = useState(false);
  const baseUrl = import.meta.env.VITE_IMG_BASE_URL;

  function toggleLiked() {
    setisLiked(!isLiked);
  }
  return (
    <div onClick={toggleLiked}>
      <S.FavoriteButtonImg
        src={isLiked ? `${baseUrl}favoriteOn.png` : `${baseUrl}favoriteOff.png`}
      ></S.FavoriteButtonImg>
    </div>
  );
}
