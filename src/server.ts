import GetUserById from "./application/usecase/user/GetUserById";
import GetUsers from "./application/usecase/user/GetUsers";
import PgPromiseAdapter from "./infra/database/PgPromiseAdapter";
import UserRepositoryDatabase from "./infra/repository/UserRepositoryDatabase";
import UserController from "./infra/controller/UserController";
import ExpressAdapter from "./infra/http/ExpressAdapter";

import 'dotenv/config';

const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const connectionUrl = process.env.DB_URL;

const httpServer = new ExpressAdapter();
const connection = new PgPromiseAdapter(connectionUrl);
const userRepository = new UserRepositoryDatabase(connection);
const getUsers = new GetUsers(userRepository);
const getUserById = new GetUserById(userRepository);

new UserController(httpServer, getUsers, getUserById);
httpServer.listen(port);
