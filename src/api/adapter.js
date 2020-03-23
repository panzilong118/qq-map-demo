/**
 * axios
 * api: https://github.com/axios/axios
 */

import axios from 'axios';
import Vue from 'vue';
import { ORIGIN_API_PREFIX } from '@/config';

const vm = new Vue();
const getInstance = (baseURL) => {
  const instance = axios.create({
    baseURL,
    timeout: 30000,
    withCredentials: true,
  });
  instance.interceptors.response.use((response = {}) => {
    const { data: { code, data } } = response;
    if (code === '0') {
      return data;
    }
    vm.$message('oops..., 后台接口报错了～');
    return Promise.reject(response.data);
  }, (error) => {
    Promise.reject(error);
  });
  return instance;
};

export const origin = getInstance(ORIGIN_API_PREFIX);
