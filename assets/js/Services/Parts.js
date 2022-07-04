import { axiosClient } from './Client/Client.js';

const getReturnParts = (page, filter, cancelationToken) => {
    return axiosClient.get(`/Parts/Return?page=${page}&q=${filter.term}`, {
        cancelToken: cancelationToken !== undefined ? cancelationToken.token : null
    });
};

const changeStatus = (item) => {
    return axiosClient.post('/Parts/ChangeStatus', item);
};

const getRMAList = () => {
    return axiosClient.get('/Parts/RMAList');
};

const getRMAStatus = (code) => {
    return axiosClient.get(`/Parts/RMAStatusCode?Code=${code}`);
};

export { getReturnParts, changeStatus, getRMAList, getRMAStatus };