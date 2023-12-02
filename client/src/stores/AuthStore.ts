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
            localStorage.setItem("id", this.session.id);
            localStorage.setItem("name", this.session.name);
            localStorage.setItem("token", this.session.token);
            this.router.push("/");
        },
        logout () {
            this.session = {};
            localStorage.removeItem("id");
            localStorage.removeItem("name");
            localStorage.removeItem("token");
            this.router.push("/login");
        },
        init () {
            const userId = localStorage.getItem("id");
            const name = localStorage.getItem("name");
            const token = localStorage.getItem("token");
            if (userId) this.session.userId = userId;
            if (name) this.session.name = name;
            if (token) this.session.token = token;
        }
    }
});
