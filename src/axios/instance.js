import axios from 'axios';
import {
  resErrorHandler,
  publicResHandler,
  authReqHandler,
  publicReqErrorHandler,
} from './function';
//베이스  instance
const basicAxios = axios.create({
  baseURL: import.meta.env.VITE_BACK_BASE_URL,
  withCredentials: true,
  timeout: 3000,
});
//인증용 instance
const authAxios = axios.create({
  baseURL: import.meta.env.VITE_BACK_BASE_URL,
  withCredentials: true,
  timeout: 3000,
});
//authAxios 요청, 응답 인터셉터
authAxios.interceptors.request.use(authReqHandler, publicReqErrorHandler);
authAxios.interceptors.response.use(publicResHandler, resErrorHandler);

//basicAxios 요청,응답 인터셉터
basicAxios.interceptors.request.use(co => {
  return co;
});
basicAxios.interceptors.response.use(publicResHandler, resErrorHandler);

export { basicAxios, authAxios };
