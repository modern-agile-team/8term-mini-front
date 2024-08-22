const regex_nickname = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,10}$/;
const regex_password = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*()._-]{6,16}$/;

export function validation(userData, passwordConfirm) {
  const error = {};

  if (!regex_nickname.test(userData.nickname)) {
    error.nickname =
      '닉네임은 2자 이상 10자 이하, 영어 또는 숫자 또는 한글로 구성되어 있어야 합니다. (초성 금지)';
  }

  if (!regex_password.test(userData.password)) {
    error.password =
      '비밀번호는 6자 이상 16자 이하, 영어와 숫자의 조합으로 구성되어 있어야 합니다.';
  }

  if (userData.password !== passwordConfirm) {
    error.passwordConfirm =
      '비밀번호와 비밀번호 확인이 일치하지 않습니다.';
  }

  return error;
}
