import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
    state () {
        return {
            session: {} as any
        }
    },
    actions: {
        async login (email: string, password: string) {
            console.log("email: ", email);
            console.log("password: ", password);
            if (!email || !password) return;
            this.session = await this.authService.login(email, password);
            console.log("session: ", this.session);
            localStorage.setItem("userId", this.session.userId);
            localStorage.setItem("userName", this.session.userName);
            localStorage.setItem("token", this.session.token);
            this.router.push("/");
        },
        logout () {
            this.session = {};
            localStorage.removeItem("userId");
            localStorage.removeItem("userName");
            localStorage.removeItem("token");
            this.router.push("/login");
        },
        init () {
            const userId = localStorage.getItem("userId");
            const userName = localStorage.getItem("userName");
            const token = localStorage.getItem("token");
            if (userId) this.session.userId = userId;
            if (userName) this.session.userName = userName;
            if (token) this.session.token = token;
        }
    }
});
