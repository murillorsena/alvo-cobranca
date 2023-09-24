import Repository from "../../application/repository/Repository";
import RepositoryFactory from "../../application/factory/RepositoryFactory";
import DatabaseConnection from "../database/DatabaseConnection";
import UserRepositoryDatabase from "../repository/user/UserRepositoryDatabase";
import StoreRepositoryDatabase from "../repository/store/StoreRepositoryDatabase";
import ShoppingRepositoryDatabase from "../repository/shopping/ShoppingRepositoryDatabase";
import RepresentativeRepositoryDatabase from "../repository/store/RepresentativeRepositoryDatabase";
import ExpenseRepositoryDatabase from "../repository/expense/ExpenseRepositoryDatabase";

export default class RepositoryFactoryDatabase implements RepositoryFactory {

    constructor (private connection: DatabaseConnection) {}

    create (repository: string): Repository {
        if (repository === "UserRepository") return new UserRepositoryDatabase(this.connection);
        if (repository === "StoreRepository") return new StoreRepositoryDatabase(this.connection);
        if (repository === "RepresentativeRepository") return new RepresentativeRepositoryDatabase(this.connection);
        if (repository === "ShoppingRepository") return new ShoppingRepositoryDatabase(this.connection);
        if (repository === "ExpenseRepository") return new ExpenseRepositoryDatabase(this.connection);
        throw new Error("Repository not found");
    }
}
