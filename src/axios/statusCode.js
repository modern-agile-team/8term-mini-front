//상태코드별 에러핸들링 여기에 함수 작성
import { tokenExpirationAlert } from '../components/public_components/Alert';
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
    console.error(msg);
    return Promise.reject(msg);
  },
  403: msg => {
    console.error(msg);
    if (msg.error === '유효하지 않거나 만료된 토큰입니다.') {
      tokenExpirationAlert(
        '토큰이 만료되었습니다.',
        '새로고침 후 다시 로그인을 시도해주세요.',
        '확인',
        '취소'
      );
    }
    return Promise.reject(new Error('권한이 없습니다'));
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
