import PgPromiseAdapter from "./infra/database/PgPromiseAdapter";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import StoreController from "./infra/controller/StoreController";
import StoreRepositoryDatabase from "./infra/repository/store/StoreRepositoryDatabase";
import RepresentativeRepositoryDatabase from "./infra/repository/store/RepresentativeRepositoryDatabase";
import GetStores from "./application/usecase/store/GetStores";
import GetStoreById from "./application/usecase/store/GetStoreById";
import LoginController from "./infra/controller/LoginController";
import Login from "./application/usecase/login/Login";
import UserRepositoryDatabase from "./infra/repository/user/UserRepositoryDatabase";
import GetUsers from "./application/usecase/user/GetUsers";
import GetUserById from "./application/usecase/user/GetUserById";
import UserController from "./infra/controller/UserController";
import "dotenv/config";

const port = Number(process.env.PORT);
const connectionUrl = process.env.DB_URL;

const httpServer = new ExpressAdapter();
const connection = new PgPromiseAdapter(connectionUrl);

const storeRepository = new StoreRepositoryDatabase(connection);
const representativeRepository = new RepresentativeRepositoryDatabase(connection);
const getStores = new GetStores(storeRepository, representativeRepository);
const getStoreById = new GetStoreById(storeRepository, representativeRepository);

const userRepository = new UserRepositoryDatabase(connection);
const getUsers = new GetUsers(userRepository);
const getUserById = new GetUserById(userRepository);
const login = new Login(userRepository);

new StoreController(httpServer, getStores, getStoreById);
new UserController(httpServer, getUsers, getUserById)
new LoginController(httpServer, login);

httpServer.listen(port);
