import * as S from './publicStyled';
import Join from '/Join.png';
import { Link } from 'react-router-dom';

/**@푸터 컴포넌트 */
export default function Footer() {
  return (
    <>
      <S.FooterDiv>
        <S.HorizontalLine />
        <S.SectionWrapperDiv>
          <S.SectionDiv>
            <S.HrTopDiv>What is a modern movie?</S.HrTopDiv>
            <S.HorizontalLine />
            <S.DescriptionDiv>
              Modern Movie is a website that introduces 20 movies you must see
              before you die, and is the ModernAgile 8term mini project.
            </S.DescriptionDiv>
          </S.SectionDiv>
          <S.SectionDiv>
            <S.JoinGroupDiv>
              <S.HrTopDiv>join to MODERN MOVIE</S.HrTopDiv>
              <Link to="/register">
                <S.JoinImg src={Join}></S.JoinImg>
              </Link>
            </S.JoinGroupDiv>
            <S.HorizontalLine />
            <S.MoreModernDiv>
              <S.HrTopDiv>more MODERN MOVIE</S.HrTopDiv>
              <S.HorizontalLine />
              <S.ModernAgileYoutubeDiv
                onClick={() =>
                  window.open(import.meta.env.VITE_MODERN_AGILE_YOUTUBE)
                }
              >
                Youtube
              </S.ModernAgileYoutubeDiv>
            </S.MoreModernDiv>
          </S.SectionDiv>
        </S.SectionWrapperDiv>
        <S.HorizontalLine />
        <S.CopywriterWrapperDiv>
          <S.CopywriterDiv>
            Copyright 2024. Modernmovie All rights reserved.
          </S.CopywriterDiv>
          <S.MenuDiv>
            <S.MenuLink to="/login">LOGIN</S.MenuLink>
            <S.MenuLink to="/">MAIN</S.MenuLink>
            <S.MenuLink to="/mypage">MYPAGE</S.MenuLink>
          </S.MenuDiv>
        </S.CopywriterWrapperDiv>
      </S.FooterDiv>
    </>
  );
}
