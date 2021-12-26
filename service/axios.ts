/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  requestInterceptor,
  responseInterceptor,
  responseInterceptorError,
} from '../api/interceptors';

export const Axios = axios.create({
  baseURL: 'https://guidegalaxy.herokuapp.com/',
  // baseURL: 'https://api.test.b2btrade.ru/api/',
});

Axios.interceptors.request.use(requestInterceptor, responseInterceptorError);
Axios.interceptors.response.use(
  responseInterceptor,
  responseInterceptorError,
);
