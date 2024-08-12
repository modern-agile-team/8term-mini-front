import * as S from './RegisterStyled.js';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { successAlert, errorAlert } from '../../public_components/Alert.jsx';
import axios from 'axios';

export default function RegisterForm() {
  const [nickname, setNickname] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({});
  const [isIdChecked, setIsIdChecked] = useState(false);
  const navigate = useNavigate();

  const regex_nickname = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,10}$/;
  const regex_id = /^(?=.*[a-z0-9])[a-z0-9]{6,16}$/;
  const regex_password =
    /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*()._-]{6,16}$/;

  useEffect(() => {
    const newError = {};

    if (nickname && !regex_nickname.test(nickname)) {
      newError.nickname =
        '닉네임은 2자 이상 10자 이하, 영어 또는 숫자 또는 한글로 구성되어 있어야 합니다. (초성 금지)';
    } else if (nickname) {
      newError.nickname = '사용 가능한 닉네임입니다.';
    }

    if (id && !regex_id.test(id)) {
      newError.id =
        '아이디는 6자 이상 16자 이하, 영어 또는 숫자로 구성되어 있어야 합니다.';
    } else if (id && !isIdChecked) {
      newError.id = '조건을 충족하는 아이디 입니다. 중복을 확인해주세요.';
    }

    if (password && !regex_password.test(password)) {
      newError.password =
        '비밀번호는 6자 이상 16자 이하, 영어와 숫자의 조합으로 구성되어 있어야 합니다.';
    } else if (password) {
      newError.password = '사용 가능한 비밀번호입니다.';
    }

    if (confirmPassword && password !== confirmPassword) {
      newError.confirmPassword =
        '비밀번호와 비밀번호 확인이 일치하지 않습니다.';
    } else if (confirmPassword && password === confirmPassword) {
      newError.confirmPassword = '비밀번호가 일치합니다.';
    }

    setError(newError);
  }, [nickname, id, password, confirmPassword, isIdChecked]);

  function validateField() {
    const newError = {};

    if (!regex_nickname.test(nickname)) {
      newError.nickname =
        '닉네임은 2자 이상 10자 이하, 영어 또는 숫자 또는 한글로 구성되어 있어야 합니다. (초성 금지)';
    }

    if (!regex_id.test(id)) {
      newError.id =
        '아이디는 6자 이상 16자 이하, 영어 또는 숫자로 구성되어 있어야 합니다.';
    }

    if (!isIdChecked) {
      newError.id = '아이디 중복 확인을 해주세요.';
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
      errorAlert('회원가입 실패', '모든 필드를 입력해주세요.');
    }

    setError(newError);

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
          successAlert(
            '회원가입 성공!',
            '회원가입이 성공적으로 완료되었습니다.'
          );
          navigate('/login');
        })
        .catch(error => {
          console.log('An error occurred:', error);
        });
    }
  }

  function handleCheckId() {
    if (regex_id.test(id)) {
      axios
        .get(`/users/check-id?id=${id}`)
        .then(response => {
          setIsIdChecked(true);
          setTimeout(() => {
            setError({ ...error, id: '사용 가능한 아이디입니다.' });
          }, 50);
        })
        .catch(error => {
          if (error.response && error.response.status === 409) {
            setError({ ...error, id: '이미 사용중인 아이디입니다.' });
          } else {
            console.log('An error occurred:', error);
          }
          setIsIdChecked(false);
        });
    } else {
      setError({ ...error, id: '사용할 수 없는 아이디입니다.' });
    }
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      if (validateField()) {
        handleRegister();
      }
    }
  }

  return (
    <S.LootDiv onKeyPress={handleKeyPress}>
      <S.InputDiv
        type="text"
        placeholder="닉네임"
        value={nickname}
        maxLength={10}
        onChange={e => setNickname(e.target.value)}
      />
      {error.nickname &&
        (error.nickname.includes('사용 가능한') ? (
          <S.SuccessText>{error.nickname}</S.SuccessText>
        ) : (
          <S.ErrorText>{error.nickname}</S.ErrorText>
        ))}

      <S.IdContainerDiv>
        <S.InputDiv
          type="text"
          placeholder="아이디"
          value={id}
          maxLength={16}
          onChange={e => {
            setId(e.target.value);
            setIsIdChecked(false);
          }}
        />
        <S.CheckButton onClick={handleCheckId} checked={isIdChecked}>
          중복 확인
        </S.CheckButton>
      </S.IdContainerDiv>
      {error.id &&
        (error.id.includes('사용 가능한') ? (
          <S.SuccessText>{error.id}</S.SuccessText>
        ) : (
          <S.ErrorText>{error.id}</S.ErrorText>
        ))}

      <S.InputDiv
        type="password"
        placeholder="비밀번호"
        value={password}
        maxLength={16}
        onChange={e => setPassword(e.target.value)}
      />
      {error.password &&
        (error.password.includes('사용 가능한') ? (
          <S.SuccessText>{error.password}</S.SuccessText>
        ) : (
          <S.ErrorText>{error.password}</S.ErrorText>
        ))}

      <S.InputDiv
        type="password"
        placeholder="비밀번호 확인"
        value={confirmPassword}
        maxLength={16}
        onChange={e => setConfirmPassword(e.target.value)}
      />
      {error.confirmPassword &&
        (error.confirmPassword.includes('일치합니다') ? (
          <S.SuccessText>{error.confirmPassword}</S.SuccessText>
        ) : (
          <S.ErrorText>{error.confirmPassword}</S.ErrorText>
        ))}

      <S.RegisterButton onClick={handleRegister}>회원가입</S.RegisterButton>
    </S.LootDiv>
  );
}
