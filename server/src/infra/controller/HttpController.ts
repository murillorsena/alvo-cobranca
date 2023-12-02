import { UseCase } from "../../application/usecase";
import { HttpServer } from "../http";

export class HttpController {

    constructor (
        private httpServer: HttpServer, 
        private login: UseCase, 
        private getDebitsByStore: UseCase
    ) {
        this.httpServer.on("get", "/", async (params: any, body: any) => {
            const input = {
                token: body["token"]
            };
            const output = await this.getDebitsByStore.execute(input);
            return output;
        });

        this.httpServer.on("post", "/login", async (params: any, body: any) => {
            const input = {
                email: body["email"],
                password: body["password"]
            };
            const output = await this.login.execute(input);
            return output;
        });
    }
}
