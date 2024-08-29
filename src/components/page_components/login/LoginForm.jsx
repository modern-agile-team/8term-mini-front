import * as S from './LoginStyled.js';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  loginSuccessAlert,
  errorAlert,
  warningAlert,
} from '../../public_components/Alert.jsx';
import { basicAxios } from '../../../axios/instance.js';
import { parseJwt } from '../../../function/parseJwt.js';

/**@로그인폼 */
export default function LoginForm() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  function validateField() {
    const newError = {};

    if (!id) {
      newError.id = '아이디를 입력해주세요.';
    }

    if (!password) {
      newError.password = '비밀번호를 입력해주세요.';
    }

    if (!id || !password) {
      errorAlert('로그인 실패', '모든 필드를 입력해주세요.');
    }

    setError(newError);

    return Object.keys(newError).length === 0;
  }

  function handleLogin() {
    if (validateField()) {
      basicAxios
        .post('/users/login', { id: id, password: password })
        .then(response => {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem(
            'user',
            JSON.stringify(parseJwt(response.data.token))
          );
          loginSuccessAlert.fire({
            icon: 'success',
            title: '로그인 성공!',
          });

          // 로그인 시 저장돼있는 이전 경로로 리다이렉트 (예외처리: 메인 이동)
          const redirect = location.state?.from || '/';
          console.log('Redirecting to:', redirect);
          if (redirect) {
            navigate(redirect);
          } else {
            console.log('No redirect location found');
          }
        })
        .catch(error => {
          warningAlert(error.error);
        });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin();
  }

  return (
    <S.LootDiv>
      <S.LoginForm onSubmit={handleSubmit}>
        <S.InputWrapper $hasError={!!error.id}>
          <S.InputDiv
            type="text"
            placeholder="아이디"
            value={id}
            maxLength={16}
            onChange={e => setId(e.target.value)}
          />
          {error.id && <S.ErrorText>{error.id}</S.ErrorText>}
        </S.InputWrapper>

        <S.InputWrapper $hasError={!!error.password}>
          <S.InputDiv
            type="password"
            placeholder="비밀번호"
            value={password}
            maxLength={16}
            onChange={e => setPassword(e.target.value)}
          />
          {error.password && <S.ErrorText>{error.password}</S.ErrorText>}
        </S.InputWrapper>

        <S.LoginButton type="submit">로그인</S.LoginButton>
      </S.LoginForm>
    </S.LootDiv>
  );
}
