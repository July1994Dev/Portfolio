import { onMounted,ref } from '../Vue/vueConfig.js';   
import { storeToRefs } from '../Vue/pinia.js'; 
import {select} from '../Config/utils.js';
import { useUserStore } from '../Stores/userStore.js';
export default {
    template:'#aboutComponent',
    props:{},
    setup(props,context){

        const {User} = storeToRefs(useUserStore());

        onMounted(()=>{
            console.log('montado');
        })
        return {}
    }
}
