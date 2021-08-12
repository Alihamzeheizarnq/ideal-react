import axios from "axios";
import { toast } from 'react-toastify';


const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/',
  Accepted : 'application/json',
  ContentType : 'application/json'
});

instance.defaults.timeout = 2500;
instance.defaults.headers.common['Authorization'] = "Bearer "+localStorage.getItem('token');


instance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  console.log(error)

  return Promise.reject(error.response);
});

instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {

  console.log(error)
  return Promise.reject(error.response);
});
export default instance;