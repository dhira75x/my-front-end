import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)

pinia.use(piniaPluginPersistedstate)
app.use(createPinia())
app.use(router)
app.use(PrimeVue, { ripple: true  })
app.use(VueSweetalert2);

app.mount('#app')
