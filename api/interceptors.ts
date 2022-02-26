import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

// Add a request interceptor
export const requestInterceptor = (
  config: AxiosRequestConfig,
): AxiosRequestConfig => config;

// Add a response interceptor
export const responseInterceptor = (response: AxiosResponse): AxiosResponse =>
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  response;

export const responseInterceptorError = (
  error: AxiosError,
): Promise<AxiosError> =>
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  Promise.reject(error);
