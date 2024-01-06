import axios, { AxiosInstance } from 'axios';
import config from '@/config';
const api: AxiosInstance = axios.create({
  baseURL: config.serverUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
export default api;