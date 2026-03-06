import './assets/main.css'
import 'animate.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { useUserStore } from './stores/userStore';

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);

const userStore = useUserStore();
try {
    await userStore.checkAuth();
} catch (error) {
    console.error("Failed to check auth during initialization:", error);
}

app.use(router);

app.mount("#app");
const loader = document.getElementById("loading");
if (loader) loader.remove();
