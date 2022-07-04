import { useDevolucionesStore } from '../../Stores/devolucionesStore.js';
import { storeToRefs } from '../../Vue/pinia.js';
import { createToast } from '../../Config/utils.js';

const axiosClient = axios.create({
    baseURL: `/`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

axiosClient.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {

        const { isLoading } = storeToRefs(useDevolucionesStore());
        isLoading.value = false;
        createToast("error", "Los datos ingresados no son validos.", 5000);
        return Promise.reject(error);
    }
);

export { axiosClient };