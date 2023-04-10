import GetUserById from "./applicaction/usecase/GetUserById";
import GetUsers from "./applicaction/usecase/GetUsers";
import PgPromiseAdapter from "./infra/database/PgPromiseAdapter";
import UserRepositoryDatabase from "./infra/repository/UserRepositoryDatabase";
import UserController from "./infra/controller/UserController";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import 'dotenv/config';
import LoginController from "./infra/controller/LoginController";
import GetUserByEmail from "./applicaction/usecase/GetUserByEmail";

const httpServer = new ExpressAdapter();
const connection = new PgPromiseAdapter();
const userRepository = new UserRepositoryDatabase(connection);
const getUsers = new GetUsers(userRepository);
const getUserById = new GetUserById(userRepository);
const getUserByEmail = new GetUserByEmail(userRepository);
const userControlller = new UserController(httpServer, getUsers, getUserById);
const loginController = new LoginController(httpServer, getUserByEmail);
const port = 3000;

// userControlller.handler();
loginController.handler();
httpServer.listen(port);
