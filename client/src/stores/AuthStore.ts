import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
    state () {
        return {
            session: {} as any
        }
    },
    actions: {
        async login (email: string, password: string) {
            this.session = await this.authService.login(email, password);
            localStorage.setItem("name", this.session.name);
            localStorage.setItem("token", this.session.token);
            this.$router.push("/");
        },
        logout () {
            this.session = {};
            localStorage.removeItem("token");
            localStorage.removeItem("name");
            this.$router.push("/login");
        },
        init () {
            const name = localStorage.getItem("name");
            const token = localStorage.getItem("token");
            if (name) this.session.name = name;
            if (token) this.session.token = token;
        }
    }
});
