import axios from 'axios';

export const Axios = axios.create({
  baseURL: `https://api.test.b2btrade.ru/api/`,
});
