//상태코드별 에러핸들링 여기에 함수 작성
export const HTTP_STATUS = {
  200: () => {
    console.log('Success');
  },
  201: () => {
    console.log('Success Created');
  },
  204: () => {
    console.log('Success No Content');
  },
  404: () => {
    console.log('	지정한 리소스에 대한 액세스가 금지되었다.');
  },
  500: () => {
    console.log('서버가 터졌다네요');
  },
};
