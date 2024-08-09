import axios, { Axios } from 'axios';
import.meta.env.VITE_MODERN_AGILE_YOUTUBE;
const AXIOS = axios.create({
  baseURL: 'http://localhost:5173',
  withCredentials: true,
  timeout: 3000,
});
AXIOS.interceptors.request.use(config => {
  const accessToken = 'Access-Token';
  config.headers['Authorization'] = `Bearer ${accessToken}`;
  return config;
});
AXIOS.interceptors.response.use(
  res => {
    return res.data;
  },
  error => {
    return Promise.reject(error);
  }
);
export default AXIOS;
