import { Repository } from "../../application/repository";
import { RepositoryFactory } from "../../application/factory";
import { UserRepositoryInMemory, StoreRepositoryInMemory, RepresentativeRepositoryInMemory, ShoppingRepositoryInMemory, DebitRepositoryInMemory, CollectionActionRepositoryInMemory } from "../repository";
import { RepositoryNotFoundError } from "../../application/error";

export class RepositoryFactoryInMemory implements RepositoryFactory {

    constructor () {}

    create (type: string): Repository {
        if (type === "UserRepository") return new UserRepositoryInMemory();
        if (type === "StoreRepository") return new StoreRepositoryInMemory();
        if (type === "RepresentativeRepository") return new RepresentativeRepositoryInMemory();
        if (type === "ShoppingRepository") return new ShoppingRepositoryInMemory();
        if (type === "DebitRepository") return new DebitRepositoryInMemory();
        if (type === "CollectionActionRepository") return new CollectionActionRepositoryInMemory();
        throw new RepositoryNotFoundError();
    }
}
