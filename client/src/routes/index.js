import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import DetailView from "../views/DetailView.vue";
import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "home", component: HomeView },
        { path: "/login", name: "login", component: LoginView },
        { path: "/detail", name: "detail", component: DetailView }
    ]
});
