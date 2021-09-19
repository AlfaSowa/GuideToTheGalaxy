/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const Axios = axios.create({
  baseURL: 'https://guidegalaxy.herokuapp.com/',
  // baseURL: 'https://api.test.b2btrade.ru/api/',
});
