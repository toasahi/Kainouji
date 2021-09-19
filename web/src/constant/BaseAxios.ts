import baseAxios, { AxiosRequestConfig } from 'axios';

export const DefaultAxiosConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  responseType: 'json',
};

console.log(DefaultAxiosConfig);

export const axios = baseAxios.create({
  ...DefaultAxiosConfig,
});
