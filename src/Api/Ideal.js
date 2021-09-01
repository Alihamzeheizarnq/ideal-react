import axios from "axios";
import { toast } from 'react-toastify';


const instance = axios.create({
    baseURL: 'https://ideal-it.test/api/v1/',
    Accepted: 'application/json',
    ContentType: 'application/json'
});

instance.defaults.timeout = 10500;


instance.interceptors.request.use(function(config) {
    config.headers['Authorization'] = "Bearer " + localStorage.getItem('token');
    return config;
}, function(error) {

    return Promise.reject(error.response);
});

instance.interceptors.response.use(function(response) {
    return response;
}, function(error) {

    if (error && error.response) {
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