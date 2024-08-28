import * as S from './LoginStyled.js';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  loginSuccessAlert,
  errorAlert,
} from '../../public_components/Alert.jsx';
import { basicAxios } from '../../../axios/instance.js';

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
        .post('/users/login', { password })
        .then(response => {
          console.log(response);
          console.log('User profile', response.data.user);
          console.log('User token', response.data.jwt);
          localStorage.setItem('token', response.data.jwt);
          localStorage.setItem('user', JSON.stringify(response.data.user));
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
          if (error.response && error.response.status === 401) {
            setError({
              ...error,
              password: '아이디 또는 비밀번호가 잘못되었습니다.',
            });
          } else {
            console.log('An error occurred:', error);
            errorAlert(
              '로그인 실패',
              '서버 오류가 발생했습니다. 다시 시도해주세요.'
            );
          }
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
