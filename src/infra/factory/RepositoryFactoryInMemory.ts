import RepositoryAbstractFactory from "../../application/factory/RepositoryAbstractFactory";
import StoreRepository from "../../application/repository/StoreRepository";
import UserRepository from "../../application/repository/UserRepository";
import RepresentativeRepository from "../../application/repository/RepresentativeRepository";
import UserRepositoryInMemory from "../repository/user/UserRepositoryInMemory";
import StoreRepositoryInMemory from "../repository/store/StoreRepositoryInMemory";
import RepresentativeRepositoryInMemory from "../repository/store/RepresentativeRepositoryInMemory";

export default class RepositoryFactoryInMemory implements RepositoryAbstractFactory {

    createUserRepository(): UserRepository {
        return new UserRepositoryInMemory();
    }

    createStoreRepository(): StoreRepository {
        return new StoreRepositoryInMemory();
    }

    createRepresentativeRepository(): RepresentativeRepository {
        return new RepresentativeRepositoryInMemory();
    }
}
