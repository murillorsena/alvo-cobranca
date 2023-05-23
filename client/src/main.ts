import AuthServiceHttp from './services/AuthServiceHttp';
import AxiosAdapter from './infra/AxiosAdapter';
import { createApp } from 'vue';
import { createPinia } from "pinia";
import App from './App.vue';
import { router } from "./routes";
import "./style.css";
import { useAuthStore } from './stores/AuthStore';
import ExpenseServiceHttp from './services/ExpenseServiceHttp';

const baseUrl = "http://localhost:3000";
const httpClient = new AxiosAdapter(router);
const authService = new AuthServiceHttp(httpClient, baseUrl);
const expenseService = new ExpenseServiceHttp(httpClient, baseUrl);

const pinia = createPinia();
pinia.use(({ store }) => {
    store.$router = router,
    store.authService = authService
});


const app = createApp(App);
app.use(pinia);
app.use(router);
useAuthStore().init();
app.provide("expenseService", expenseService);
app.mount('#app');
