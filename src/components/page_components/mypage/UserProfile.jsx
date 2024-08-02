import * as S from './MyPageStyled';
import profileimg from '/profileimg.png';
export default function UserProfile() {
  return (
    <>
      <S.UserProfileDiv>
        <S.UserProfileImgDiv>
          <S.UserProfileImg src={profileimg}></S.UserProfileImg>
          <S.UserProfileChangeDiv>변경</S.UserProfileChangeDiv>
        </S.UserProfileImgDiv>

        <S.UserProfileInfoDiv>
          <S.UserProfileCoulmnDiv $marginBottom={'70px'} $marginTop={'20px'}>
            <S.UserProfileRowDiv>
              <S.labelDiv>닉네임</S.labelDiv>
              <S.UserInfoInput></S.UserInfoInput>
            </S.UserProfileRowDiv>
            <S.UserProfileRowDiv>
              <S.labelDiv>아이디</S.labelDiv>
              <S.UserInfoInput></S.UserInfoInput>
            </S.UserProfileRowDiv>
          </S.UserProfileCoulmnDiv>

          <S.UserProfileCoulmnDiv $marginBottom={'70px'}>
            <S.UserProfileRowDiv>
              <S.labelDiv>비밀번호 수정</S.labelDiv>
              <S.PasswordInput></S.PasswordInput>
            </S.UserProfileRowDiv>
            <S.UserProfileRowDiv>
              <S.labelDiv>비밀번호 확인</S.labelDiv>
              <S.PasswordInput></S.PasswordInput>
            </S.UserProfileRowDiv>
          </S.UserProfileCoulmnDiv>

          <S.ButtonDiv>
            <S.Button $bgColor="#F7F9F3" $marginRight="30px">
              수정
            </S.Button>
            <S.Button $fontColor="#F7F9F3">완료</S.Button>
          </S.ButtonDiv>
        </S.UserProfileInfoDiv>
      </S.UserProfileDiv>
    </>
  );
}
