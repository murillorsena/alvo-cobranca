import ExpressAdapter from "./infra/http/ExpressAdapter";
import PgPromiseAdapter from "./infra/database/PgPromiseAdapter";
import JwtAdapter from "./infra/token-generator/JwtAdapter";
import HttpController from "./infra/controller/HttpController";
import UserRepositoryDatabase from "./infra/repository/user/UserRepositoryDatabase";
import StoreRepositoryDatabase from "./infra/repository/store/StoreRepositoryDatabase";
import RepresentativeRepositoryDatabase from "./infra/repository/store/RepresentativeRepositoryDatabase";
import ShoppingRepositoryDatabase from "./infra/repository/shopping/ShoppingRepositoryDatabase";
import ExpenseRepositoryDatabase from "./infra/repository/expense/ExpenseRepositoryDatabase";
import Login from "./application/usecase/login/Login";
import GetExpenses from "./application/usecase/expense/GetExpenses";
import AuthDecorator from "./application/decorator/AuthDecorator";
import "dotenv/config";

const port = Number(process.env.PORT);
const connectionUrl = String(process.env.DB_URL);
const secret = String(process.env.SECRET);
const salt = String(process.env.SALT);

const httpServer = new ExpressAdapter();
const connection = new PgPromiseAdapter(connectionUrl);
connection.connect();
const tokenGenerator = new JwtAdapter(secret);

const userRepository = new UserRepositoryDatabase(connection);
const storeRepository = new StoreRepositoryDatabase(connection);
const representativeRepository = new RepresentativeRepositoryDatabase(connection);
const shoppingRepository = new ShoppingRepositoryDatabase(connection);
const expensesRepository = new ExpenseRepositoryDatabase(connection);

const login = new Login(userRepository, tokenGenerator, salt);
const getExpenses = new GetExpenses(expensesRepository, storeRepository, representativeRepository, shoppingRepository, userRepository);

new HttpController(httpServer, login, new AuthDecorator(getExpenses, tokenGenerator));

httpServer.listen(port);
