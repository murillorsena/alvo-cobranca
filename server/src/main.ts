import { Login, GetExpenses, GetNotifications } from "./application/usecase";
import { AuthDecorator } from "./application/decorator";
import { ExpressAdapter } from "./infra/http";
import { PgPromiseAdapter } from "./infra/database";
import { JwtAdapter } from "./infra/token-generator";
import { HttpController } from "./infra/controller";
import { RepositoryFactoryDatabase } from "./infra/factory";
import { config } from "./config";

const httpServer = new ExpressAdapter();
const connection = new PgPromiseAdapter(config.database.url);
connection.connect();

const repositoryFactory = new RepositoryFactoryDatabase(connection);
const tokenGenerator = new JwtAdapter(config.auth.secret);

const login = new Login(repositoryFactory, tokenGenerator);
const getExpenses = new GetExpenses(repositoryFactory);
const getNotifications = new GetNotifications(repositoryFactory);

new HttpController(
    httpServer, 
    login, 
    new AuthDecorator(getExpenses, tokenGenerator), 
    new AuthDecorator(getNotifications, tokenGenerator)
);

httpServer.listen(config.server.port);