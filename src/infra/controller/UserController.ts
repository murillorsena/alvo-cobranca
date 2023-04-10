import HttpServer from "../http/HttpServer";
import GetUsers from "../../applicaction/usecase/GetUsers";
import GetUserById from "../../applicaction/usecase/GetUserById";

export default class UserController {

    constructor (
        private httpServer: HttpServer, 
        private getUsers: GetUsers, 
        private getUserById: GetUserById
    ) {}

    handler () {
        this.httpServer.on('get', '/users', async () => {
            const output = await this.getUsers.execute();
            return output;
        });

        this.httpServer.on('get', '/users/:id', async (params: any, body: any) => {
            const output = await this.getUserById.execute(params.id);
            return output;
        });
    }
}
