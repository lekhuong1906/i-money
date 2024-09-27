import router from './router';

import { createApp } from 'vue';
import App from './App.vue';

import './assets/main.css';
import './assets/styles/tailwind.css';
import './assets/styles/global.css';

import { auth } from "@/configs/firebase"
import { registerGlobalComponent } from './utils/imports';

let app;

auth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App);
        registerGlobalComponent(app);
        app.use(router);
        app.mount('#app');
    }
})
