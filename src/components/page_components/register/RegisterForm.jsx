import * as S from './RegisterStyled.js';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { basicAxios } from '../../../axios/instance.js';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {
  validateNickname,
  validateId,
  validatePassword,
  validateConfirmPassword,
  validateField,
} from '../../../function/registerValidation.js';
import {
  registerSuccessAlert,
  errorAlert,
} from '../../public_components/Alert.jsx';

export default function RegisterForm() {
  const [nickname, setNickname] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({});
  const [isIdChecked, setIsIdChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const newError = {};

    // 닉네임 실시간 유효성 검사
    const nicknameError = validateNickname(nickname);
    if (nicknameError) newError.nickname = nicknameError;

    // ID 실시간 유효성 검사
    const idError = validateId(id, isIdChecked);
    if (idError) newError.id = idError;

    // 비밀번호 실시간 유효성 검사
    const passwordError = validatePassword(password);
    if (passwordError) newError.password = passwordError;

    // 비밀번호 확인 실시간 유효성 검사
    const confirmPasswordError = validateConfirmPassword(
      password,
      confirmPassword
    );
    if (confirmPasswordError) newError.confirmPassword = confirmPasswordError;

    setError(newError);
  }, [nickname, id, password, confirmPassword, isIdChecked]);

  function handleRegister() {
    const validationErrors = validateField(
      nickname,
      id,
      password,
      confirmPassword,
      isIdChecked
    );

    if (Object.keys(validationErrors).length === 0) {
      basicAxios
        .post('/users', {
          nickname: nickname,
          id: id,
          password: password,
          confirmPassword: confirmPassword,
        })
        .then(response => {
          console.log('User profile', response.user);
          console.log('User registration :', response.message);
          registerSuccessAlert();
          navigate('/login');
        })
        .catch(error => {
          console.log('An error occurred:', error);
          errorAlert(
            '회원가입 실패',
            '서버 오류가 발생했습니다. 다시 시도해주세요.'
          );
        });
    } else {
      setError(validationErrors);
      errorAlert('회원가입 실패', '모든 필드를 올바르게 입력해주세요.');
    }
  }

  function handleCheckId() {
    const idError = validateId(id, false);
    if (idError === '') {
      basicAxios
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
      setError({ ...error, id: idError });
    }
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      handleRegister();
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

      <S.PasswordContainerDiv>
        <S.InputDiv
          type={showPassword ? 'text' : 'password'}
          placeholder="비밀번호"
          value={password}
          maxLength={16}
          onChange={e => setPassword(e.target.value)}
        />
        <S.ToggleIconDiv onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </S.ToggleIconDiv>
      </S.PasswordContainerDiv>
      {error.password &&
        (error.password.includes('사용 가능한') ? (
          <S.SuccessText>{error.password}</S.SuccessText>
        ) : (
          <S.ErrorText>{error.password}</S.ErrorText>
        ))}

      <S.PasswordContainerDiv>
        <S.InputDiv
          type={showConfirmPassword ? 'text' : 'password'}
          placeholder="비밀번호 확인"
          value={confirmPassword}
          maxLength={16}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <S.ToggleIconDiv
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
        </S.ToggleIconDiv>
      </S.PasswordContainerDiv>
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
