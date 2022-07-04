import { axiosClient } from './Client/Client.js';

const Login = (credentials) => {
    return axiosClient.post('/Account/Login', credentials);
}

export { Login };