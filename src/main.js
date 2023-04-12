import 'animate.css/animate.min.css'
import router from "./router";
import { createApp } from "vue";
import App from "./App.vue";
createApp(App).mount("#app");
/* createApp(App).use(router).mount("#app"); */
/* import PrimeVue from "primevue/config"; */

/* const app = createApp(App);
app.use(PrimeVue); */
createApp(App).use(router).mount('#app')
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";

//core
import "primevue/resources/primevue.min.css";

//icons
import "primeicons/primeicons.css";
