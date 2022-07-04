import { HomeComponent, ReturnPartsComponent, CheckStatusComponent } from '../Layouts/index.js';
import * as components from '../Components/index.js';

const routes = [
    { path: '/', component: ReturnPartsComponent },
    { path: '/Devoluciones', component: ReturnPartsComponent },
    { path: '/CheckStatus', component: CheckStatusComponent },
];

export default VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
    linkActiveClass: "active",
});

