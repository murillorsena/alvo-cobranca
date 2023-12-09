import { RepositoryNotFoundError } from "../../src/application/error";
import { UserRepositoryInMemory, StoreRepositoryInMemory, RepresentativeRepositoryInMemory, ShoppingRepositoryInMemory, CollectionActionRepositoryInMemory } from "../../src/infra/repository";
import { RepositoryFactory } from "../../src/application/factory";
import { Repository } from "../../src/application/repository";

export const userRepository: UserRepositoryInMemory = new UserRepositoryInMemory();
export const storeRepository: StoreRepositoryInMemory = new StoreRepositoryInMemory();
export const representativeRepository: RepresentativeRepositoryInMemory = new RepresentativeRepositoryInMemory();
export const shoppingRepository: ShoppingRepositoryInMemory = new ShoppingRepositoryInMemory();
export const collectionActionRepository: CollectionActionRepositoryInMemory = new CollectionActionRepositoryInMemory();

export class RepositoryFactoryMock implements RepositoryFactory {

    create (repository: string): Repository {
        if (repository === "UserRepository") return userRepository;
        if (repository === "StoreRepository") return storeRepository;
        if (repository === "RepresentativeRepository") return representativeRepository;
        if (repository === "ShoppingRepository") return shoppingRepository;
        if (repository === "CollectionActionRepository") return collectionActionRepository;
        throw new RepositoryNotFoundError();
    }
};
