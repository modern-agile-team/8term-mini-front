import React from 'react';
import * as S from './IntroStyled';

export default function IntroForm({ movie }) {
  const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
  const { backdrop_path, original_title, title, overview, release_date } =
    movie;

  return (
    <S.LootDiv>
      <S.ImageWrapperDiv>
        <S.DummyPhotoImg
          src={`${IMG_BASE_URL}${backdrop_path}`}
          alt={original_title}
        />
        <S.DummyPhotoImg
          src={`${IMG_BASE_URL}${backdrop_path}`}
          alt={original_title}
        />
      </S.ImageWrapperDiv>
      <S.TextWrapperDiv>
        <S.MovieEnTitleDiv>{original_title}</S.MovieEnTitleDiv>
        <S.HorizontalLine />
        <S.TitleGroupDiv>
          <S.MovieKoTitleDiv>{title}</S.MovieKoTitleDiv>
          <S.ReleaseDiv>{new Date(release_date).getFullYear()}</S.ReleaseDiv>
        </S.TitleGroupDiv>
        <S.InfoWrapperDiv>
          <S.InfoGroupDiv>
            <S.InfoDiv>
              <S.InfoKey>감독</S.InfoKey>
              <S.InfoValue>데이빗 린치</S.InfoValue>
            </S.InfoDiv>
            <S.ThinHr />
            <S.InfoDiv>
              <S.InfoKey>배우</S.InfoKey>
              <S.InfoValue>나오미 왓츠, 로라 해링</S.InfoValue>
            </S.InfoDiv>
            <S.ThinHr />
            <S.InfoDiv>
              <S.InfoKey>등급</S.InfoKey>
              <S.InfoValue>청소년관람불가</S.InfoValue>
            </S.InfoDiv>
            <S.ThinHr />
            <S.InfoDiv>
              <S.InfoKey>러닝타임</S.InfoKey>
              <S.InfoValue>147분</S.InfoValue>
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
