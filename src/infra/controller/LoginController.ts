import GetUserByEmail from "../../applicaction/usecase/GetUserByEmail";
import HttpServer from "../http/HttpServer";

export default class LoginController {

    constructor (
        private httpServer: HttpServer, 
        private getUserByEmail: GetUserByEmail
    ) {}

    handler () {
        this.httpServer.on('post', '/login', async (params: any, body: any) => {
            const { email } = body;
            const userAlreadyExists = await this.getUserByEmail.execute(email);
            if (!userAlreadyExists) throw new Error('User alreads exists');
            return userAlreadyExists;
        });
    }
}
