import * as S from './RegisterStyled.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function RegisterForm() {
  const [nickname, setNickname] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  function handleRegister() {
    axios
      .post('/users', {
        nickname: nickname,
        id: id,
        password: password,
        confirmPassword: confirmPassword,
      })
      .then(response => {
        // Handle success.
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        localStorage.setItem('token', response.data.jwt);
        console.log(response);
        navigate('/login');
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error);
      });
  }

  return (
    <S.LootDiv>
      <S.InputDiv
        type="text"
        placeholder="닉네임"
        value={nickname}
        onChange={e => setNickname(e.target.value)}
      />
      <S.InputDiv
        type="text"
        placeholder="아이디"
        value={id}
        onChange={e => setId(e.target.value)}
      />
      <S.InputDiv
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <S.InputDiv
        type="password"
        placeholder="비밀번호 확인"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
      />
      <S.RegisterButton onClick={handleRegister}>회원가입</S.RegisterButton>
    </S.LootDiv>
  );
}
