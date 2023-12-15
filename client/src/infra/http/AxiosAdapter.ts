import { HttpClient } from "../http";
import axios from "axios";

export class AxiosAdapter implements HttpClient {

    constructor (router: any) {
        this.requestInterceptor();
        this.responseInterceptor(router);
    }

    async get (url: string): Promise<any> {
        const response = await axios({
            url,
            method: "get"
        });
        return response.data;
    }

    async post (url: string, data: any): Promise<any> {
        console.log("axios -> url: ", url);
        console.log("axios -> data: ", data);
        const response = await axios({
            url,
            method: "post",
            data
        });
        console.log("axios -> response: ", response);
        return response.data;
    }

    async put (url: string, data: any): Promise<any> {
        const response = await axios({
            url,
            method: "put",
            data
        });
        return response.data;
    }
    
    async delete (url: string): Promise<any> {
        const response = await axios({
            url,
            method: "delete"
        });
        return response.data;
    }

    private requestInterceptor () {
        axios.interceptors.request.use((config: any) => {
            const token = localStorage.getItem("token");
            if (token) config.headers["Authorization"] = `Bearer ${token}`;
            return config;
        });
    }

    private responseInterceptor (router: any) {
        axios.interceptors.response.use((response: any) => {
            return response;
        }, (error) => {
            if (error.response.status === 401) {
                localStorage.removeItem("userId");
                localStorage.removeItem("userName");
                localStorage.removeItem("token");
                router.push("/login");
            }
            const message = error.response.data.message;
            return Promise.reject(message);
        });
    }
}
