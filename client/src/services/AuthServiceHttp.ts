import HttpClient from "../infra/HttpClient";
import AuthService from "./AuthService";

export default class AuthServiceHttp implements AuthService {

    constructor (
        private httpClient: HttpClient, 
        private baseUrl: string
    ) {}
    
    async login (email: string, password: string): Promise<any> {
        const session = await this.httpClient.post(`${this.baseUrl}/login`, {
            email,
            password
        });
        return session;
    }
}
