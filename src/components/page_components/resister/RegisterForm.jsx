import * as S from './RegisterStyled.js';

/**@회원가입폼 */
export default function RegisterForm() {
  return (
    <S.LootDiv>
      <S.InputDiv type="text" placeholder="아이디" />
      <S.InputDiv type="password" placeholder="비밀번호" />
      <S.InputDiv type="password" placeholder="비밀번호 확인" />
      <S.RegisterButton>회원가입</S.RegisterButton>
    </S.LootDiv>
  );
}
