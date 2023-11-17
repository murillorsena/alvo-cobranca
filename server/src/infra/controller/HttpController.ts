import { UseCase } from "../../application/usecase";
import { HttpServer } from "../http";

export class HttpController {

    constructor (
        private httpServer: HttpServer, 
        private login: UseCase, 
        private getExpenses: UseCase,
        private getNotifications: UseCase
    ) {
        this.httpServer.on("get", "/", async (params: any, body: any) => {
            const input = {
                token: body["token"]
            };
            const output = await this.getExpenses.execute(input);
            console.log("getExpenses: ", output);
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

        this.httpServer.on("get", "/store/notifications", async (params: any, body: any) => {
            const input = {
                token: body["token"]
            };
            const output = await this.getNotifications.execute(input);
            return output;
        });
    }
}
