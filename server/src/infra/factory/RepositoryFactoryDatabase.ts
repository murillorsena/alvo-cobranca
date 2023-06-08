import DatabaseConnection from "../database/DatabaseConnection";
import UserRepositoryDatabase from "../repository/user/UserRepositoryDatabase";
import StoreRepositoryDatabase from "../repository/store/StoreRepositoryDatabase";
import RepresentativeRepositoryDatabase from "../repository/store/RepresentativeRepositoryDatabase";
import ShoppingRepositoryDatabase from "../repository/shopping/ShoppingRepositoryDatabase";
import ExpenseRepository from "../../application/repository/ExpenseRepository";
import RepresentativeRepository from "../../application/repository/RepresentativeRepository";
import ShoppingRepository from "../../application/repository/ShoppingRepository";
import StoreRepository from "../../application/repository/StoreRepository";
import UserRepository from "../../application/repository/UserRepository";

export default class RepositoryFactoryDatabase {

    static create (type: string, connection: DatabaseConnection): UserRepository | ExpenseRepository | StoreRepository | RepresentativeRepository | ShoppingRepository {
        if (type === "UserRepository") return new UserRepositoryDatabase(connection);
        if (type === "StoreRepository") return new StoreRepositoryDatabase(connection);
        if (type === "RepresentativeRepository") return new RepresentativeRepositoryDatabase(connection);
        if (type === "ShoppingRepository") return new ShoppingRepositoryDatabase(connection);
        throw new Error("Invalid repository type");
    }
}
