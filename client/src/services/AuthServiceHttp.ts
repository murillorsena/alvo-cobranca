import { AuthService, AuthServiceSession } from "../services";
import { HttpClient } from "../infra/http";

export class AuthServiceHttp implements AuthService {

    constructor (private httpClient: HttpClient, private baseUrl: string) {}
    
    async login (email: string, password: string): Promise<AuthServiceSession> {
        const url = `${this.baseUrl}/login`;
        console.log("url: ", url);
        const data = {
            email,
            password
        };
        const session = await this.httpClient.post(url, data);
        console.log("session: ", session);
        return session;
    }
}
