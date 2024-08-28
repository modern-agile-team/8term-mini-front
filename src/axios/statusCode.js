//상태코드별 에러핸들링 여기에 함수 작성
import { warningAlert } from '../components/public_components/Alert';
export const HTTP_STATUS = {
  200: () => {
    console.log(
      '%cSuccess',
      'color:white; background-color:green; font-weight:bold '
    );
  },
  201: () => {
    console.log('Success Created');
  },
  204: () => {
    console.log('Success No Content');
  },
  400: msg => {
    return Promise.reject(msg);
  },
  403: msg => {
    console.error(msg);
    warningAlert('요청 권한이 없습니다');
    return Promise.reject(msg);
  },
  404: msg => {
    console.error(msg);
    warningAlert('존재하지 않는 요청입니다.');
    return Promise.reject(msg);
  },
  409: msg => {
    console.error(msg);
    return Promise.reject(msg);
  },
  500: msg => {
    console.error(msg);
    warningAlert('서버와의 연결이 끊겼습니다.').then(res => {
      if (res.isConfirmed) {
        window.location = '/';
      }
    });
    return Promise.reject(msg);
  },
};
