// 유효성 검사를 위한 정규 표현식
const regex_nickname = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,10}$/;
const regex_id = /^(?=.*[a-z0-9])[a-z0-9]{6,16}$/;
const regex_password =
  /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*()._-]{6,16}$/;

// 닉네임 유효성 검사
export function validateNickname(nickname) {
  if (!nickname) return ' ';
  if (!regex_nickname.test(nickname)) {
    return '닉네임은 2자 이상 10자 이하, 영어 또는 숫자 또는 한글로 구성되어 있어야 합니다. (초성 금지)';
  }
  return '사용 가능한 닉네임입니다.';
}

// 아이디 유효성 검사
export function validateId(id, isIdChecked) {
  if (!id) return ' ';
  if (!regex_id.test(id)) {
    return '아이디는 6자 이상 16자 이하, 영어 또는 숫자로 구성되어 있어야 합니다.';
  }
  if (!isIdChecked) {
    return '조건을 충족하는 아이디 입니다. 중복을 확인해주세요.';
  }
  return '';
}

// 비밀번호 유효성 검사
export function validatePassword(password) {
  if (!password) return ' ';
  if (!regex_password.test(password)) {
    return '비밀번호는 6자 이상 16자 이하, 영어와 숫자의 조합으로 구성되어 있어야 합니다.';
  }
  return '사용 가능한 비밀번호입니다.';
}

// 비밀번호 확인 유효성 검사
export function validateConfirmPassword(password, confirmPassword) {
  if (!confirmPassword) return ' ';
  if (password !== confirmPassword) {
    return '비밀번호와 비밀번호 확인이 일치하지 않습니다.';
  }
  return '비밀번호가 일치합니다.';
}

// 최종 필드 유효성 검사 (제출 전에 모든 필드 검사)
export function validateField(
  nickname,
  id,
  password,
  confirmPassword,
  isIdChecked
) {
  const errors = {};

  const nicknameError = validateNickname(nickname);
  if (nicknameError && !nicknameError.includes('사용 가능한'))
    errors.nickname = nicknameError;

  const idError = validateId(id, isIdChecked);
  if (idError) errors.id = idError;

  const passwordError = validatePassword(password);
  if (passwordError && !passwordError.includes('사용 가능한'))
    errors.password = passwordError;

  const confirmPasswordError = validateConfirmPassword(
    password,
    confirmPassword
  );
  if (confirmPasswordError && !confirmPasswordError.includes('일치합니다'))
    errors.confirmPassword = confirmPasswordError;

  return errors;
}
