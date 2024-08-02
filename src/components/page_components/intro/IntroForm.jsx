import * as S from './IntroStyled';
import dummyphoto1 from '/dummyphoto1.png';
import dummyphoto2 from '/dummyphoto2.png';

/**@영화소개폼 */
export default function IntroForm() {
  return (
    <S.LootDiv>
      <S.ImageWrapperDiv>
        <S.DummyPhotoImg src={dummyphoto1} />
        <S.DummyPhotoImg src={dummyphoto2} />
      </S.ImageWrapperDiv>
      <S.TextWrapperDiv>
        <S.MovieEnTitleDiv>Mulholland Drive</S.MovieEnTitleDiv>
        <S.HorizontalLine />
        <S.TitleGroupDiv>
          <S.MovieKoTitleDiv>멀홀랜드 드라이브</S.MovieKoTitleDiv>
          <S.ReleaseDiv>1952</S.ReleaseDiv>
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
          <S.SummaryTextDiv>
            어느 날 밤 교통사고에서 가까스로 살아남은 리타는 기억을 잃은 채 근처
            빌라에 숨어들고, 할리우드 스타의 꿈을 안고 LA의 친척 집에 도착한
            베티는 숨어있던 리타를 발견한다.
          </S.SummaryTextDiv>
        </S.SummaryWrapperDiv>
      </S.TextWrapperDiv>
    </S.LootDiv>
  );
}
