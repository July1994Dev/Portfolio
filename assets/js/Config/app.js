
import { createPinia } from '../Vue/pinia.js';
import { HomeComponent } from '../Components/index.js';
import aboutComponent from '../Components/aboutComponent.js';
import router from './router.js';

const app = Vue.createApp({});

app.component("home-component", HomeComponent);
app.component("about-component",aboutComponent);

app.use(createPinia());
app.use(VueViewer.default);
app.use(router)

app.mount('#app');
export default app;