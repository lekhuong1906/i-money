import { createWebHistory, createRouter } from 'vue-router';
import { auth } from "@/configs/firebase"
const requiereAuth = (to, from, next) => {
    const user = auth.currentUser;
    
    if (!user) {
        next({ name: 'Login', params: {} });
    }
    else {
        next();
    }
}
const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {
            layout: 'default',
            leading: true,
            text : 'Home Page',
            isShowFooter: true
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
        component: () => import("../views/login.vue"),
    },
    {
        path: '/index',
        name: 'Index',
        meta: {
            layout: 'default',
            isShowFooter: true
        },
        component: () => import("../views/index.vue"),
    },
    {
        path: '/profile',
        name: 'Profile',
        meta: {
            layout: 'default',
            leading: false,
            text : 'Profile Page',
            isShowFooter: true
        },
        component: () => import("../views/profile.vue"),
        beforeEnter: requiereAuth
    },
    {
        path: '/logout',
        name: 'Logout',
        meta: {
            layout: 'default'
        },
        component: () => import("../views/logout.vue")
    },
    {
        path: '/new-transaction',
        name: 'NewTransaction',
        meta: {
            text: "Add New Transaction",
            layout: 'default',
            isShowFooter: false
        },
        component: () => import("../views/new-transaction.vue")
    },
    {
        path: '/report',
        name: 'Report',
        meta: {
            layout: 'default',
            isShowFooter: true
        },
        component: () => import("../views/report.vue")
    },
    {
        path: '/budget',
        name: 'Budget',
        meta: {
            layout: 'default',
            isShowFooter: true
        },
        component: () => import("../views/budget.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;