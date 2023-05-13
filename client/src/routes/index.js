import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import DetailView from "../views/DetailView.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { path: "/login", name: "login", component: LoginView },
    { path: "/home", name: "home", component: HomeView },
    { path: "/detail", name: "detail", component: DetailView }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
