import * as S from './styled.js';

export default function LoginForm() {
  return (
    <S.LootDiv>
      <S.InputDiv type="text" placeholder="아이디" />
      <S.InputDiv type="password" placeholder="비밀번호" />
      <S.LoginButton>로그인</S.LoginButton>
    </S.LootDiv>
  );
}
