import axios from 'axios';
import {config} from 'config'; // eslint-disable-line
// import { getToken } from '../app/utils/AuthUtil';

axios.defaults.baseURL = config.baseUrl;
// axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 60000 * 5;

// axios.interceptors.request.use((config) => {
//   const token = getToken();
//   if (token) {
//     config.headers['Authorization'] = `apptoken ${token}`;
//     return config;
//   }
//   else {
//     throw new axios.Cancel('AuthNoToken');
//   }
//
// }, function (err) {
//   return Promise.reject(err);
// });
