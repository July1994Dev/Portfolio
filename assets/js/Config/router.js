import * as components from '../Components/index.js';
import newpage from '../Components/Pages/newpage.js';

const routes = [
    {path:'/test', component: newpage}
];

export default VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
    linkActiveClass: "active",
});

