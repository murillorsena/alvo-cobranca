import HttpServer from "../http/HttpServer";
import UseCase from "../../application/usecase/UseCase";

export default class HttpController {

    constructor (
        private httpServer: HttpServer, 
        private login: UseCase,
        private getExpenses: UseCase
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
            return output;
        });
    }
}
