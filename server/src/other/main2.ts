import PgPromiseAdapter from "./infra/database/PgPromiseAdapter";
import UserRepositoryDatabase from "./infra/repository/user/UserRepositoryDatabase";
import SignUp from "./application/usecase/login/SignUp";
import "dotenv/config";

const connectionUrl = process.env.DB_URL;
const connection = new PgPromiseAdapter(connectionUrl);
connection.connect();

const salt = String(process.env.SALT);
const userRepository = new UserRepositoryDatabase(connection);
const signUp = new SignUp(userRepository, salt);

const user1 = {
    name: "Tim Clarkson",
    email: "timclarkson@mail.com",
    password: "Timclarkson@123"
};

const user2 = {
    name: "Kane Frost",
    email: "kanefrost@mail.com",
    password: "Kanefrost@123"
};

signUp.execute(user1);
signUp.execute(user2);
