import axios from '../../core/axios';

export default {
  postLogin: data => axios.post(`/api/users/login`, data),
  postRegister: data => axios.post(`/api/users/register`, data)
};
