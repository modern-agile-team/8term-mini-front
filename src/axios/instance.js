import axios from 'axios';
import { confirmLoginAlert } from '../components/public_components/Alert';
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
      // console.log('인증이 필요한 요청:', config.url, config.method, config);
      //토큰
      const accessToken = localStorage.getItem('token') || null;
      const errorMsg = new Error('로그인이 필요한 기능입니다.');
      //1.엑세스 토큰이 있나없나 검증
      //엑세스 토큰이 있다면 실행
      if (accessToken) {
        //헤더에 엑세스토큰을 부착
        config.headers['Authorization'] = `Bearer ${accessToken}`;
        //서버에 값 전달
        return config;
      }
      //에러일 경우
      //1.요청이 get요청이면 에러 메세지만 리턴함
      if (config.method === 'get') {
        return Promise.reject(new Error(errorMsg));
      }
      //2.get 요청이 아닌 다른 요청일 경우 로그인이 필요하다는 알림창과 함께 에러메세지 리턴
      confirmLoginAlert(
        '로그인 필요',
        '로그인이 필요한 기능입니다.',
        '로그인 페이지 이동',
        '확인'
      );
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
basicAxios.interceptors.response.use(publicResHandler, publicErrorHandler);
authAxios.interceptors.response.use(publicResHandler, publicErrorHandler);

function publicErrorHandler(err) {
  console.error(err);
  return Promise.reject(new Error('퍼블릭핸들러거침'));
}
function publicResHandler(res) {
  // console.log('리스폰스값:', res.data, res.request.responseURL);
  return res.data;
}

export { basicAxios, authAxios };
