import React from 'react';
import * as S from './IntroStyled';

export default function IntroForm({ movie }) {
  const baseUrl = import.meta.env.VITE_IMG_BASE_URL;
  const {
    image1,
    image2,
    originalTitle,
    title,
    director,
    actor,
    adult,
    runningTime,
    overview,
    releaseDate,
  } = movie[0];
  console.log(movie);

  const adultText = adult === 1 ? '청소년관람불가' : '전체관람가';

  return (
    <S.LootDiv>
      <S.ImageWrapperDiv>
        <S.MovieImg src={`${baseUrl}${image1}`} alt={originalTitle} />
        <S.MovieImg src={`${baseUrl}${image2}`} alt={originalTitle} />
      </S.ImageWrapperDiv>
      <S.TextWrapperDiv>
        <S.MovieEnTitleDiv>{originalTitle}</S.MovieEnTitleDiv>
        <S.HorizontalLine />
        <S.TitleGroupDiv>
          <S.MovieKoTitleDiv>{title}</S.MovieKoTitleDiv>
          <S.ReleaseDiv>{new Date(releaseDate).getFullYear()}</S.ReleaseDiv>
        </S.TitleGroupDiv>
        <S.InfoWrapperDiv>
          <S.InfoGroupDiv>
            <S.InfoDiv>
              <S.InfoKey>감독</S.InfoKey>
              <S.InfoValue>{director}</S.InfoValue>
            </S.InfoDiv>
            <S.ThinHr />
            <S.InfoDiv>
              <S.InfoKey>배우</S.InfoKey>
              <S.InfoValue>{actor}</S.InfoValue>
            </S.InfoDiv>
            <S.ThinHr />
            <S.InfoDiv>
              <S.InfoKey>등급</S.InfoKey>
              <S.InfoValue>{adultText}</S.InfoValue>
            </S.InfoDiv>
            <S.ThinHr />
            <S.InfoDiv>
              <S.InfoKey>러닝타임</S.InfoKey>
              <S.InfoValue>{runningTime}분</S.InfoValue>
            </S.InfoDiv>
            <S.ThinHr />
          </S.InfoGroupDiv>
        </S.InfoWrapperDiv>
        <S.SummaryWrapperDiv>
          <S.SummaryDiv>줄거리</S.SummaryDiv>
          <S.SummaryTextDiv>{overview}</S.SummaryTextDiv>
        </S.SummaryWrapperDiv>
      </S.TextWrapperDiv>
    </S.LootDiv>
  );
}
