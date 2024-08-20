/** @유저정보가져오는함수 인덱스 순서대로int 아이디 str아이디 닉네임 반환 */
export default function getUserInfo() {
  const user = JSON.parse(localStorage.getItem('user'));
  //유저가 있으면 다음 리턴
  if (user) {
    return [user.user_id, user.id, user.nickName];
  }
  return [null, null, null];
}
