import DatabaseConnection from "../../infra/database/DatabaseConnection";
import UserRepository from "../repository/UserRepository";
import StoreRepository from "../repository/StoreRepository";
import RepresentativeRepository from "../repository/RepresentativeRepository";
import ShoppingRepository from "../repository/ShoppingRepository";
import ExpenseRepository from "../repository/ExpenseRepository";

export default interface RepositoryAbstractFactory {
    create (type: string, connection: DatabaseConnection): UserRepository | StoreRepository | RepresentativeRepository | ShoppingRepository | ExpenseRepository;
}
