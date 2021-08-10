import axios from "axios";


const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/',
  Accepted : 'application/json',
  ContentType : 'application/json'
});

instance.defaults.timeout = 2500;



export default instance;