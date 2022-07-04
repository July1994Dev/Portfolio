
import { createPinia } from '../Vue/pinia.js';
import { HomeComponent } from '../Components/index.js';

const app = Vue.createApp({});

app.component("home-component", HomeComponent);

app.use(createPinia());
app.use(VueViewer.default);

app.mount('#app');
export default app;