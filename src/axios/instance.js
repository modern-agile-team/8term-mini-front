import axios, { Axios } from 'axios';
import.meta.env.VITE_MODERN_AGILE_YOUTUBE;
const basicAxios = axios.create({
  baseURL: 'http://localhost:5173',
  withCredentials: true,
  timeout: 3000,
});

const authAxios = axios.create({
  baseURL: 'http://localhost:5173',
  withCredentials: true,
  timeout: 3000,
});

authAxios.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('token');
  config.headers['Authorization'] = `Bearer ${accessToken}`;
  return config;
});

basicAxios.interceptors.response.use(publicResHandler, publicErrorHandler);
authAxios.interceptors.response.use(publicResHandler, publicErrorHandler);

function publicErrorHandler(error) {
  const status = error.response.status;
  if (status === 403) {
    return Promise.reject({ status: status });
  }
  return Promise.reject('');
}
function publicResHandler(res) {
  return res.data;
}

export { basicAxios, authAxios };
