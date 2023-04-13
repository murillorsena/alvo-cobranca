import GetUserByEmail from "../../application/usecase/user/GetUserByEmail";
import HttpServer from "../http/HttpServer";

export default class AuthController {

    constructor (
        private httpServer: HttpServer, 
        private getUserByEmail: GetUserByEmail
    ) {}

    handler () {
        this.httpServer.on('post', '/login', async (params: any, body: any) => {
            const { email } = body;
            const userExists = await this.getUserByEmail.execute(email);
            if (!userExists) throw new Error('Usuário ja cadastrado');
            return userExists;
        });
    }
}
