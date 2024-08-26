//상태코드별 에러핸들링 여기에 함수 작성
import { warningAlert } from '../components/public_components/Alert';
export const HTTP_STATUS = {
  200: () => {
    console.log('%cSuccess', 'color:white; background-color:green ');
  },
  201: () => {
    console.log('Success Created');
  },
  204: () => {
    console.log('Success No Content');
  },
  404: () => {
    warningAlert('존재하지 않는 요청입니다.');
    return Promise.reject(new Error('존재하지 않는 요청입니다.'));
  },
  409: () => {
    warningAlert('중복된 요청입니다');
    return Promise.reject(new Error('요청중복'));
  },
  500: () => {
    warningAlert('서버와의 연결이 끊겼습니다.').then(res => {
      if (res.isConfirmed) {
        window.location = '/';
      }
    });
    return Promise.reject(new Error('서버 에러 발생'));
  },
};
