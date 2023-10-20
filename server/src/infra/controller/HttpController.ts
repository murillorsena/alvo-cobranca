import { HttpServer } from "../http";
import { UseCase } from "../../application/usecase";

export class HttpController {

    constructor (
        private httpServer: HttpServer, 
        private login: UseCase, 
        private getExpenses: UseCase,
        private getNotification: UseCase
    ) {
        this.httpServer.on("get", "/", async (params: any, body: any) => {
            const input = {
                token: body["token"]
            };
            const output = await this.getExpenses.execute(input);
            return output;
        });

        this.httpServer.on("post", "/login", async (params: any, body: any) => {
            const input = {
                email: body["email"],
                password: body["password"]
            };
            const output = await this.login.execute(input);
            console.log(output);
            return output;
        });

        this.httpServer.on("get", "/store/notification", async (params: any, body: any) => {
            const output = await this.getNotification.execute();
            return output;
        });
    }
}
