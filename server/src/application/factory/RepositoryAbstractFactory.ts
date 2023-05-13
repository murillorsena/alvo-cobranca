import UserRepository from "../repository/UserRepository";
import StoreRepository from "../repository/StoreRepository";
import RepresentativeRepository from "../repository/RepresentativeRepository";

export default interface RepositoryAbstractFactory {
    createUserRepository (): UserRepository;
    createStoreRepository (): StoreRepository;
    createRepresentativeRepository (): RepresentativeRepository
}
