import { Repository } from "../../application/repository";
import { RepositoryFactory } from "../../application/factory";
import { UserRepositoryInMemory, StoreRepositoryInMemory, RepresentativeRepositoryInMemory, ShoppingRepositoryInMemory, ExpenseRepositoryInMemory, NotificationRepositoryInMemory } from "../repository";
import { RepositoryNotFoundError } from "../../application/error";

export class RepositoryFactoryInMemory implements RepositoryFactory {

    constructor () {}

    create (repository: string): Repository {
        if (repository === "UserRepository") return new UserRepositoryInMemory();
        if (repository === "StoreRepository") return new StoreRepositoryInMemory();
        if (repository === "RepresentativeRepository") return new RepresentativeRepositoryInMemory();
        if (repository === "ShoppingRepository") return new ShoppingRepositoryInMemory();
        if (repository === "ExpenseRepository") return new ExpenseRepositoryInMemory();
        if (repository === "NotificationRepository") return new NotificationRepositoryInMemory();
        throw new RepositoryNotFoundError();
    }
}
