import PgPromiseAdapter from "./infra/database/PgPromiseAdapter";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import StoreRepositoryDatabase from "./infra/repository/store/StoreRepositoryDatabase";
import RepresentativeRepositoryDatabase from "./infra/repository/store/RepresentativeRepositoryDatabase";
import GetStores from "./application/usecase/store/GetStores";
import GetStoreById from "./application/usecase/store/GetStoreById";
import Login from "./application/usecase/login/Login";
import UserRepositoryDatabase from "./infra/repository/user/UserRepositoryDatabase";
import GetUsers from "./application/usecase/user/GetUsers";
import GetUserById from "./application/usecase/user/GetUserById";
import "dotenv/config";
import JwtAdapter from "./infra/token-generator/JwtAdapter";
import HttpController from "./infra/controller/HttpController";
import GetExpenses from "./application/usecase/expense/GetExpenses2";
import ExpenseRepositoryDatabase from "./infra/repository/expense/ExpenseRepositoryDatabase";
import AuthDecorator from "./application/decorator/AuthDecorator";

const port = Number(process.env.PORT);
const connectionUrl = process.env.DB_URL;
const secret = process.env.SECRET;

const httpServer = new ExpressAdapter();
const connection = new PgPromiseAdapter(connectionUrl);
const tokenGenerator = new JwtAdapter(secret);

const storeRepository = new StoreRepositoryDatabase(connection);
const representativeRepository = new RepresentativeRepositoryDatabase(connection);
const getStores = new GetStores(storeRepository, representativeRepository);
const getStoreById = new GetStoreById(storeRepository, representativeRepository);

const userRepository = new UserRepositoryDatabase(connection);
const getUsers = new GetUsers(userRepository);
const getUserById = new GetUserById(userRepository);
const login = new Login(userRepository, tokenGenerator);

const expensesRepository = new ExpenseRepositoryDatabase(connection);
const getExpenses = new GetExpenses(expensesRepository);

new HttpController(httpServer, login, new AuthDecorator(getExpenses, tokenGenerator));

httpServer.listen(port);
