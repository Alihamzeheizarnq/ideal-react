import axios from "axios";
import { toast } from 'react-toastify';
import ENV from "../env";


const instance = axios.create({
    baseURL: ENV.APP_URL+'/api/v1/',
    Accepted: 'application/json',
    ContentType: 'application/json'
});

instance.defaults.timeout = 20000;


instance.interceptors.request.use(function(config) {
    config.headers['Authorization'] = "Bearer " + localStorage.getItem('token');
    return config;
}, function(error) {

    return Promise.reject(error.response);
});

instance.interceptors.response.use(function(response) {
    return response;
}, function(error) {

    if (error && error.response && error.response.status) {
        switch (error.response.status) {
            case 422:
                for (const property in error.response.data.errors) {
                    toast.error(error.response.data.errors[property].toString());
                }
                break;

            default:
                break;
        }
    }

    return Promise.reject(error.response);
});
export { instance };