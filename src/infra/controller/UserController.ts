import { HttpServer } from "../http/HttpServer";
import CreateUser from "../../application/usecase/user/CreateUser";
import GetUsers from "../../application/usecase/user/GetUsers";
import GetUserById from "../../application/usecase/user/GetUserById";

export default class UserController {

    constructor (
        private httpServer: HttpServer, 
        private createUser: CreateUser,
        private getUsers: GetUsers, 
        private getUserById: GetUserById
    ) {
        this.httpServer.on("post", "/users", async (params: any, body: any) => {
            const input = {
                name: body.name,
                email: body.email,
                password: body.password
            };
            const output = await this.createUser.execute(input);
            return output;
        });

        this.httpServer.on("get", "/users", async (params: any, body: any) => {
            const output = await this.getUsers.execute();
            return output;
        });

        
        this.httpServer.on("get", "/users/:id", async (params: any, body: any) => {
            const output = await this.getUserById.execute({
                id: params.id
            });
            return output;
        });
    }
}
