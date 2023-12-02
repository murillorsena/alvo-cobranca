import { AuthServiceHttp, ExpenseServiceHttp } from "./services";
import { useAuthStore } from "./stores";
import { AxiosAdapter } from "./infra/http";
import { router } from "./routes";
import App from "./App.vue";

import { createApp } from "vue";
import { createPinia } from "pinia";
import vuetify from './plugins/vuetify';

const baseUrl = "http://localhost:3000";
const httpClient = new AxiosAdapter(router);
const authService = new AuthServiceHttp(httpClient, baseUrl);
const expenseService = new ExpenseServiceHttp(httpClient, baseUrl);
// const notificationService = new NotificationServiceHttp(httpClient, baseUrl);

const pinia = createPinia();

pinia.use(({ store }) => {
    store.router = router,
    store.authService = authService
});

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(vuetify)
useAuthStore().init();
app.provide("expenseService", expenseService);
// app.provide("notificationService", notificationService);
app.mount('#app');
