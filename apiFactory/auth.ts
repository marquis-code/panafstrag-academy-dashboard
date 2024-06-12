import { axiosInstance } from './axios.config'

export const authApiFactory = {
  register(data: any) {
    return axiosInstance.post('/auth/register', data);
  },
  login(data: any) {
    return axiosInstance.post('/auth/login', data);
  },
  forgot(data: any) {
    return axiosInstance.post('/auth/forgot', data);
  },
  reset(data: any) {
    return axiosInstance.post('/auth/reset', data);
  },
};
