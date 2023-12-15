import { AuthService, AuthServiceSession } from "../services";
import { HttpClient } from "../infra/http";

export class AuthServiceHttp implements AuthService {

    constructor (private httpClient: HttpClient, private baseUrl: string) {}
    
    async login (email: string, password: string): Promise<AuthServiceSession> {
        const url = `${this.baseUrl}/login`;
        console.log("url: ", url);
        console.log("url2: ", `${this.baseUrl}login`);
        const data = {
            email,
            password
        };
        const session = await this.httpClient.post(url, data);
        return session;
    }
}
