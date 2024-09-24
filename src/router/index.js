import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {
            layout: 'default',
        },
        component: () => import(/* webpackChunkName: "home" */ "../views/home.vue")
    },
    {
        path: '/register',
        name: 'Register',
        meta: {
            layout: 'auth'
        },
        component: () => import("../views/register.vue")
    },
    {
        path: '/login',
        name: "Login",
        meta: {
            layout: 'auth'
        },
        component: () => import("../views/login.vue")
    },
    {
        path: '/index',
        name: 'Index',
        meta: {
            layout: 'default'
        },
        component: () => import("../views/index.vue")
    },
    {
        path:'/profile',
        name:'Profile',
        meta:{
            layout: 'default'
        },
        component: () => import("../views/profile.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;