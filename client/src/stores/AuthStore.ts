import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
    state () {
        return {
            session: {} as any
        }
    },
    actions: {
        async login (email: string, password: string) {
            if (!email || !password) return;
            this.session = await this.authService.login(email, password);
            localStorage.setItem("userId", this.session.userId);
            localStorage.setItem("username", this.session.username);
            localStorage.setItem("token", this.session.token);
            this.router.push("/");
        },
        logout () {
            this.session = {};
            localStorage.removeItem("userId");
            localStorage.removeItem("username");
            localStorage.removeItem("token");
            this.router.push("/login");
        },
        init () {
            const userId = localStorage.getItem("userId");
            const username = localStorage.getItem("username");
            const token = localStorage.getItem("token");
            if (userId) this.session.userId = userId;
            if (username) this.session.username = username;
            if (token) this.session.token = token;
        }
    }
});
