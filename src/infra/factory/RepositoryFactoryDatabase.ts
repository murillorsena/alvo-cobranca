import RepositoryAbstractFactory from "../../application/factory/RepositoryAbstractFactory";
import Connection from "../database/Connection";
import StoreRepositoryDatabase from "../repository/store/StoreRepositoryDatabase";
import RepresentativeRepositoryDatabase from "../repository/store/RepresentativeRepositoryDatabase";
import UserRepository from "../../application/repository/UserRepository";
import UserRepositoryDatabase from "../repository/user/UserRepositoryDatabase";
import StoreRepository from "../../application/repository/StoreRepository";
import RepresentativeRepository from "../../application/repository/RepresentativeRepository";

export default class RepositoryFactoryDatabase implements RepositoryAbstractFactory {

    constructor (private connection: Connection) {}

    createUserRepository(): UserRepository {
        return new UserRepositoryDatabase(this.connection);   
    }

    createStoreRepository (): StoreRepository {
        return new StoreRepositoryDatabase(this.connection);
    }

    createRepresentativeRepository (): RepresentativeRepository {
        return new RepresentativeRepositoryDatabase(this.connection);
    }
}
