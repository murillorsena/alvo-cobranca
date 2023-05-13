import AuthServiceHttp from './services/AuthServiceHttp';
import AxiosAdapter from './infra/AxiosAdapter';
import { createApp } from 'vue';
import App from './App.vue';
import router from "./routes";
import "./style.css";

const baseUrl = "http://localhost:3000";
const httpClient = new AxiosAdapter();
const authService = new AuthServiceHttp(httpClient, baseUrl);

const app = createApp(App);
app.provide("AuthService", authService);
app.use(router);
app.mount('#app');
