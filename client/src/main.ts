import AxiosAdapter from "./infra/AxiosAdapter";
import AuthServiceHttp from "./services/AuthServiceHttp";
import ExpenseServiceHttp from "./services/ExpenseServiceHttp";
import { useAuthStore } from "./stores/AuthStore";
import { router } from "./routes";
import App from "./App.vue";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as labsComponents from "vuetify/labs/components"

import "@mdi/font/css/materialdesignicons.css"
import "vuetify/styles";

const baseUrl = "http://localhost:3000";
const httpClient = new AxiosAdapter(router);
const authService = new AuthServiceHttp(httpClient, baseUrl);
const expenseService = new ExpenseServiceHttp(httpClient, baseUrl);

const pinia = createPinia();

pinia.use(({ store }) => {
    store.router = router,
    store.authService = authService
});

const vuetify = createVuetify({
    components: {
        ...components,
        ...labsComponents
    },
    directives,
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
            mdi
        }
    }
});

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(vuetify)
useAuthStore().init();
app.provide("expenseService", expenseService);
app.mount('#app');
