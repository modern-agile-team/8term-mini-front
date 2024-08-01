import * as S from './MainStyled';
import favoriteOff from '/favoriteOff.png';
import favoriteOn from '/favoriteOn.png';
import { useState } from 'react';
export default function FavoriteButton() {
  const [isLiked, setisLiked] = useState(false);

  function toggleLiked() {
    setisLiked(!isLiked);
  }
  return (
    <div onClick={toggleLiked}>
      <S.FavoriteButtonImg
        src={isLiked ? favoriteOn : favoriteOff}
      ></S.FavoriteButtonImg>
    </div>
  );
}
