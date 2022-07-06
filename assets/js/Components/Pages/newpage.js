import { onMounted, ref } from '../../Vue/vueConfig.js';
export default {
    template:'#newpage',
    props:{},
    setup(props,context){
        onMounted(()=>{
            console.log('mounted newpage');
        })
        return {}
    }

}
