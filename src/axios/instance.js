import axios, { Axios } from 'axios';
import.meta.env.VITE_MODERN_AGILE_YOUTUBE;
//토큰이 필요없는 요청 보낼때 사용
const basicAxios = axios.create({
  baseURL: 'http://localhost:5173',
  withCredentials: true,
  timeout: 3000,
});
//엑세스토큰이 필요한 요청을 보낼때 사용하는 인증용 요청
const authAxios = axios.create({
  baseURL: 'http://localhost:5173',
  withCredentials: true,
  timeout: 3000,
});
//authAxios 요청 인터셉터
authAxios.interceptors.request.use(
  config => {
    {
      const accessToken = localStorage.getItem('token') || null;
      const errorMsg = new Error(
        `${
          config.method === 'get'
            ? '읽어올 수 없습니다.'
            : '로그인이 필요한 기능입니다.'
        } 로그인 후 다시 시도해 주세요.`
      );

<<<<<<< HEAD
authAxios.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('token');
  config.headers['Authorization'] = `Bearer ${accessToken}`;
  return config;
});
=======
      //엑세스 토큰이 있다면 실행
      if (accessToken) {
        //헤더에 엑세스토큰을 부착
        config.headers['Authorization'] = `Bearer ${accessToken}`;
        return config;
      }
      return Promise.reject(new Error(errorMsg));
    }
  },
  error => {
    console.error('요청 인터셉터 에러:', error); // 진짜에러
    return Promise.reject(error);
  }
);
>>>>>>> 83d5f193196d196374f715c0ce1fc6c255506548

basicAxios.interceptors.response.use(publicResHandler);
authAxios.interceptors.response.use(publicResHandler);

function publicResHandler(res) {
  return res.data;
}

export { basicAxios, authAxios };
