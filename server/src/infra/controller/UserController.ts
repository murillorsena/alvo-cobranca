import HttpServer from "../http/HttpServer";
import GetUsers from "../../application/usecase/user/GetUsers";
import GetUserById from "../../application/usecase/user/GetUserById";

export default class UserController {

    constructor (
        private httpServer: HttpServer, 
        private getUsers: GetUsers, 
        private getUserById: GetUserById
    ) {
        this.httpServer.on("get", "/users", async (params: any, body: any) => {
            const output = await this.getUsers.execute();
            return output;
        });
        
        this.httpServer.on("get", "/users/:id", async (params: any, body: any) => {
            const input = {
                id: params.id
            };
            const output = await this.getUserById.execute(input);
            return output;
        });
    }
}
