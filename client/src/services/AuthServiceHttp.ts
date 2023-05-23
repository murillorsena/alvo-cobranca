import HttpClient from "../infra/HttpClient";
import AuthService from "./AuthService";

export default class AuthServiceHttp implements AuthService {

    constructor (
        private httpClient: HttpClient, 
        private baseUrl: string
    ) {}
    
    async login (email: string, password: string): Promise<any> {
        const data = {
            email,
            password
        };
        const session = await this.httpClient.post(`${this.baseUrl}/login`, data);
        return session;
    }
}
