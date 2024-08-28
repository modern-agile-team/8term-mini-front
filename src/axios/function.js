import { confirmLoginAlert } from '../components/public_components/Alert';
import { HTTP_STATUS } from './statusCode';
//응답 에러핸들러
export function resErrorHandler(err) {
  if (err.response && err.response.status) {
    console.log(err.response.status);
    return HTTP_STATUS[err.response.status](err.response.data);
  }

  return Promise.reject(err);
}
//authAxios 요청 핸들러
export function authReqHandler(config) {
  //토큰 가져오기
  const accessToken = localStorage.getItem('token') || null;
  //엑세스 토큰 검증 로직
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
    return config;
  }

  //에러 메세지 세팅
  const errorMsg = new Error('로그인이 필요한 기능입니다.');
  errorMsg.name = 'Request Cancel';
  //요청이 POST, DELETE ,PUT 등등일때는 얼럿창도 띄움
  if (!(config.method === 'get')) {
    confirmLoginAlert(
      '로그인 필요',
      '로그인이 필요한 기능입니다.',
      '로그인 페이지 이동',
      '확인'
    );
  }
  //Promise.reject로 에러메세지 반환
  return Promise.reject(errorMsg);
}
//response값 핸들러
export function publicResHandler(res) {
  console.log(res);
  HTTP_STATUS[res.status]();
  return res;
}
export function publicReqErrorHandler(err) {
  console.error('요청 에러:', err);
  return Promise.reject(err);
}
