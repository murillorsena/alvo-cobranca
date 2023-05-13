import HttpServer from "../http/HttpServer";
import Login from "../../application/usecase/login/Login";

export default class LoginController {

    constructor (
        private httpServer: HttpServer, 
        private login: Login
    ) {
        this.httpServer.on("post", "/login", async (params: any, body: any) => {
            const input = {
                email: body.email,
                password: body.password
            };
            const output = await this.login.execute(input);
            return output;
        });
    }
}
