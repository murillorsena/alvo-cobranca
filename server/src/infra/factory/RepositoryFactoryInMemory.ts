import { Repository } from "../../application/repository";
import { RepositoryFactory } from "../../application/factory";
import { UserRepositoryInMemory, StoreRepositoryInMemory, RepresentativeRepositoryInMemory, ShoppingRepositoryInMemory, ExpenseRepositoryInMemory, NotificationRepositoryInMemory } from "../repository";
import { RepositoryNotFoundError } from "../../application/error";

export class RepositoryFactoryInMemory implements RepositoryFactory {

    constructor () {}

    create (type: string): Repository {
        if (type === "UserRepository") return new UserRepositoryInMemory();
        if (type === "StoreRepository") return new StoreRepositoryInMemory();
        if (type === "RepresentativeRepository") return new RepresentativeRepositoryInMemory();
        if (type === "ShoppingRepository") return new ShoppingRepositoryInMemory();
        if (type === "ExpenseRepository") return new ExpenseRepositoryInMemory();
        if (type === "NotificationRepository") return new NotificationRepositoryInMemory();
        throw new RepositoryNotFoundError();
    }
}
