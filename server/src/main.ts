import ExpressAdapter from "./infra/http/ExpressAdapter";
import PgPromiseAdapter from "./infra/database/PgPromiseAdapter";
import JwtAdapter from "./infra/token-generator/JwtAdapter";
import HttpController from "./infra/controller/HttpController";
import Login from "./application/usecase/login/Login";
import GetExpenses from "./application/usecase/expense/GetExpenses";
import AuthDecorator from "./application/decorator/AuthDecorator";
import "dotenv/config";
import RepositoryFactoryDatabase from "./infra/factory/RepositoryFactoryDatabase";


const port = Number(process.env.PORT);
const connectionUrl = String(process.env.DB_URL);
const secret = String(process.env.SECRET);
const salt = String(process.env.SALT);

const httpServer = new ExpressAdapter();
const connection = new PgPromiseAdapter(connectionUrl);
connection.connect();

const repositoryFactory = new RepositoryFactoryDatabase(connection);
const tokenGenerator = new JwtAdapter(secret);

const login = new Login(repositoryFactory, tokenGenerator, salt);
const getExpenses = new GetExpenses(repositoryFactory);

new HttpController(httpServer, login, new AuthDecorator(getExpenses, tokenGenerator));

httpServer.listen(port);
