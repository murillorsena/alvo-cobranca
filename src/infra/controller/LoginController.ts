import { HttpServer } from "../http/HttpServer";
import GetUserByEmail from "../../application/usecase/user/GetUserByEmail";

export default class LoginController {

    constructor (
        private httpServer: HttpServer, 
        private getUserByEmail: GetUserByEmail
    ) {
        this.httpServer.on("post", "/login", async (params: any, body: any) => {
            const userExists = await this.getUserByEmail.execute(body.email);
            if (!userExists) throw new Error("User already exists");
            return userExists;
        });
    }
}
