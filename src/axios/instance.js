import axios from 'axios';
import { warningAlert } from '../components/public_components/Alert';
//토큰이 필요없는 요청 보낼때 사용
const basicAxios = axios.create({
  baseURL: import.meta.env.VITE_BACK_BASE_URL,
  //'http://localhost:5173'
  withCredentials: true,
  timeout: 3000,
});
//엑세스토큰이 필요한 요청을 보낼때 사용하는 인증용 요청
const authAxios = axios.create({
  baseURL: import.meta.env.VITE_BACK_BASE_URL,
  //  'http://localhost:5173'
  withCredentials: true,
  timeout: 3000,
});
//authAxios 요청 인터셉터
authAxios.interceptors.request.use(
  config => {
    {
      console.log('인증이 필요한 요청:', config.url, config.method, config);
      //토큰 저장
      const accessToken = localStorage.getItem('token') || null;
      const errorMsg = new Error('로그인이 필요한 기능입니다.');
      //멧소
      if (!config.method === 'get' && !accessToken) {
        return warningAlert('야!!!!!!!!');
      }

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
basicAxios.interceptors.request.use(config => {
  // console.log('베이직요청', config.url, config.method, config);
  return config;
});
basicAxios.interceptors.response.use(publicResHandler);
authAxios.interceptors.response.use(publicResHandler);

function publicResHandler(res) {
  // console.log('리스폰스값:', res.data, res.request.responseURL);
  return res.data;
}

export { basicAxios, authAxios };
