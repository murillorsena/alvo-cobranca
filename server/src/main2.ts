import PgPromiseAdapter from "./infra/database/PgPromiseAdapter";
import UserRepositoryDatabase from "./infra/repository/user/UserRepositoryDatabase";
import SignUp from "./application/usecase/login/SignUp";
import "dotenv/config";

const connectionUrl = process.env.DB_URL;
const connection = new PgPromiseAdapter(connectionUrl);

const userRepository = new UserRepositoryDatabase(connection);
const signUp = new SignUp(userRepository);

const user1 = {
    name: "Murillo",
    email: "murillo@mail.com",
    password: "Murill@123"
};

const user2 = {
    name: "Teste",
    email: "teste@mail.com",
    password: "Teste@123"
};

signUp.execute(user1);
signUp.execute(user2);
