import axios from 'inula-request';
// import axios from 'axios';

const baseURL = '';
const version = '/api/v1';

const service = axios.create({
  baseURL: baseURL + version,
  timeout: 5000,
  // withCredentials: true,
});

service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log('interceptors.request-->error::', error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    const res = response.data;
    console.log('interceptors.response-->res::', res);
    return Promise.resolve(res);
  },
  error => {
    console.log('interceptors.response-->error::>', error);
    return Promise.reject(error);
  }
);

export default service;
