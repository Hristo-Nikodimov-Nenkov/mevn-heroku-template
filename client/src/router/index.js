import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import homeRoutes from "./home";
import accountRoutes from "./account";
import fallbackRoute from "./fallback";

const routes = [
    ...homeRoutes,
    ...accountRoutes,
    fallbackRoute // This must always be last !!!
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
