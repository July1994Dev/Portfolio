import { axiosClient } from './Client/Client.js';

const GetInvoice = (invoice) => {
    return axiosClient.get('/Devoluciones/GetInvoice?invoice=' + invoice + "&accountNumber=" + cust.AccountNumber);
};

const GetReasons = () => {
    return axiosClient.get('/Devoluciones/GetReasons');
};

const UploadImage = (data) => {
    return axiosClient.post('/Devoluciones/UploadImage', data, {
        headers: {
            "content-type": "multipart/form-data"
        }
    });
};

const DeleteImage = (url) => {
    return axiosClient.post('/Devoluciones/DeleteImage?url=' + url);
};

const UploadReturnPart = (returnPart) => {
    return axiosClient.post('/Devoluciones/UploadReturnPart', returnPart);
}

const UploadReturnPartCasco = (returnPart) => {
    return axiosClient.post('/Devoluciones/UploadReturnPartCasco', returnPart);
}

export { GetInvoice, GetReasons, UploadImage, DeleteImage, UploadReturnPart, UploadReturnPartCasco };