import { AuthServiceHttp, DebitServiceHttp, CollectionActionServiceHttp } from "./services";
import { AxiosAdapter } from "./infra/http";
import { useAuthStore } from "./stores";
import { router } from "./routes";
import App from "./App.vue";
import "dotenv/config";

import { createApp } from "vue";
import { createPinia } from "pinia";
import vuetify from './plugins/vuetify';


const baseUrl = String(process.env.BASE_URL);
const httpClient = new AxiosAdapter(router);
const authService = new AuthServiceHttp(httpClient, baseUrl);
const debitService = new DebitServiceHttp(httpClient, baseUrl);
const collectionActionService = new CollectionActionServiceHttp(httpClient, baseUrl);

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
app.provide("debitService", debitService);
app.provide("collectionActionService", collectionActionService);
app.mount('#app');
