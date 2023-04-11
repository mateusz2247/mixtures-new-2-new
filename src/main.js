import { createApp } from "vue";
import App from "./App.vue";
createApp(App).mount("#app");

import PrimeVue from 'primevue/config';

const app = createApp(App);
app.use(PrimeVue);
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primevue/resources/primevue.min.css";

//icons
import "primeicons/primeicons.css";

