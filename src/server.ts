import CreateUser from "./application/usecase/user/CreateUser";
import GetUsers from "./application/usecase/user/GetUsers";
import GetUserById from "./application/usecase/user/GetUserById";
import UserRepositoryDatabase from "./infra/repository/user/UserRepositoryDatabase";
import UserController from "./infra/controller/UserController";
import PgPromiseAdapter from "./infra/database/PgPromiseAdapter";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import BcryptAdapter from "./infra/hasher/BcryptAdapter";

import "dotenv/config";

const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const connectionUrl = process.env.DB_URL;
const salt = 10;

const httpServer = new ExpressAdapter();
const connection = new PgPromiseAdapter(connectionUrl);
const hasher = new BcryptAdapter(salt);

const userRepository = new UserRepositoryDatabase(connection);
const createUser = new CreateUser(userRepository, hasher);
const getUsers = new GetUsers(userRepository);
const getUserById = new GetUserById(userRepository);

new UserController(httpServer, createUser, getUsers, getUserById);
httpServer.listen(port);
