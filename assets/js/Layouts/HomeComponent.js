import { onMounted, ref } from '../Vue/vueConfig.js';
import { storeToRefs } from '../Vue/pinia.js';
import { select } from '../Config/utils.js';
import {useUserStore} from '../Stores/userStore.js';

export default {
    template: '#homeComponent',
    props: {},
    setup(props, context) {
        
        const { User } = storeToRefs(useUserStore());

        const {MetodoTest} = useUserStore();

        onMounted(() => {
            const typed = select('.typed');
            if (typed) {
                let typed_strings = typed.getAttribute('data-typed-items');
                typed_strings = typed_strings.split(',');
                new Typed('.typed', {
                    strings: typed_strings,
                    loop: true,
                    typeSpeed: 100,
                    backSpeed: 50,
                    backDelay: 2000
                });
            }
        });

        return {
            User,
            MetodoTest
        }
    }
};