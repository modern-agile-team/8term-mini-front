import * as S from './ResisterStyled.js';

/**@회원가입폼 */
export default function ResisterForm() {
  return (
    <S.LootDiv>
      <S.InputDiv type="text" placeholder="아이디" />
      <S.InputDiv type="password" placeholder="비밀번호" />
      <S.InputDiv type="password" placeholder="비밀번호 확인" />
      <S.ResisterButton>회원가입</S.ResisterButton>
    </S.LootDiv>
  );
}
