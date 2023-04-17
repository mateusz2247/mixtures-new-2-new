/* import 'animate.css/animate.min.css'
import router from "./router";
import { createApp } from "vue";
import App from "./App.vue";
createApp(App).mount("#app");
createApp(App).use(router).mount("#app");
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css"; */

import "animate.css/animate.min.css";
import router from "./router";
import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import store from "./store";


const app = createApp(App);
app.use(router);
app.mount("#app");
app.use(PrimeVue);
app.use(store);
