import { useDevolucionesStore } from '../Stores/devolucionesStore.js';
import { ref } from '../Vue/vueConfig.js';
import { storeToRefs } from '../Vue/pinia.js';

export default {
    template: '#LoadImagesComponent',
    props: {
        invoice: "",
        sku: ""
    },
    setup(props, context) {
        const refImage = ref(null);
        const { itemsToReturn } = storeToRefs(useDevolucionesStore());
        const { UploadPhoto, DeletePhoto } = useDevolucionesStore();
        const item = ref(itemsToReturn.value.filter(x => x.invoice === props.invoice && x.ItemNumber === props.sku)[0]);

        const uploadImage = () => {
            var body = new FormData();
            body.append('image', refImage.value.files[0]);
            UploadPhoto(body, props.sku, props.invoice);
        };

        const RemoveImage = (url, index) => {
            let array = url.split("/");
            let name = array[array.length - 1];
            DeletePhoto(name, props.sku, props.invoice, index);
        };

        const viewerOptions = {
            movable: true,
            rotatable: true,
            scalable: true,
            url: 'data-href',
            title(image, imageData) {
                return image.alt
            }
        };

        return {
            refImage, item, uploadImage, RemoveImage, viewerOptions
        }
    }
};