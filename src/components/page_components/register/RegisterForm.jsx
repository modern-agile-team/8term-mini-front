import * as S from './RegisterStyled.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { successAlert, errorAlert } from '../../public_components/Aleart.jsx';
import axios from 'axios';

export default function RegisterForm() {
  const [nickname, setNickname] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({});
  const navigate = useNavigate();

  // 닉네임: 2자 이상 16자 이하, 영어 또는 숫자 또는 한글로 구성
  const regex_nickname = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;
  // 아이디: 8자 이상 16자 이하, 영어 또는 숫자로 구성
  const regex_id = /^(?=.*[a-z0-9])[a-z0-9]{8,16}$/;
  // 6자 이상 16자 이하, 영어와 숫자의 조합으로 구성
  const regex_password =
    /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*()._-]{6,16}$/;

  /**@유효성검사 */
  function validateField() {
    const newError = {};

    if (!regex_nickname.test(nickname)) {
      newError.nickname =
        '닉네임은 2자 이상 16자 이하, 영어 또는 숫자 또는 한글로 구성되어 있어야 합니다.';
    }

    if (!regex_id.test(id)) {
      newError.id =
        '아이디는 8자 이상 16자 이하, 영어 또는 숫자로 구성되어 있어야 합니다.';
    }

    if (!regex_password.test(password)) {
      newError.password =
        '비밀번호는 6자 이상 16자 이하, 영어와 숫자의 조합으로 구성되어 있어야 합니다.';
    }

    if (password !== confirmPassword) {
      newError.confirmPassword =
        '비밀번호와 비밀번호 확인이 일치하지 않습니다.';
    }

    if (!nickname || !id || !password || !confirmPassword) {
      errorAlert('회원가입 실패', '모든 필드를 입력해주세요.')
    }

    setError(newError);

    // 유효성 검사 결과 판단
    return Object.keys(newError).length === 0;
  }

  function handleRegister() {
    if (validateField()) {
      axios
        .post('/users', {
          nickname: nickname,
          id: id,
          password: password,
          confirmPassword: confirmPassword,
        })
        .then(response => {
          console.log('User profile', response.data.user);
          console.log('User token', response.data.jwt);
          localStorage.setItem('token', response.data.jwt);
          successAlert('회원가입 성공!', '회원가입이 성공적으로 완료되었습니다.');
          navigate('/login');
        })
        .catch(error => {
          console.log('An error occurred:', error);
        });
    }
  }

  return (
    <S.LootDiv>
      <S.InputDiv
        type="text"
        placeholder="닉네임"
        value={nickname}
        onChange={e => setNickname(e.target.value)}
      />
      {error.nickname && <S.ErrorText>{error.nickname}</S.ErrorText>}

      <S.InputDiv
        type="text"
        placeholder="아이디"
        value={id}
        onChange={e => setId(e.target.value)}
      />
      {error.id && <S.ErrorText>{error.id}</S.ErrorText>}

      <S.InputDiv
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      {error.password && <S.ErrorText>{error.password}</S.ErrorText>}

      <S.InputDiv
        type="password"
        placeholder="비밀번호 확인"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
      />
      {error.confirmPassword && (
        <S.ErrorText>{error.confirmPassword}</S.ErrorText>
      )}

      <S.RegisterButton onClick={handleRegister}>회원가입</S.RegisterButton>
    </S.LootDiv>
  );
}
