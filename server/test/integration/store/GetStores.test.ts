import { Store, StoreProps, Representative, RepresentativeProps } from "../../../src/domain/entity";
import { GetStores } from "../../../src/application/usecase";
import { RepositoryNotFoundError } from "../../../src/application/error";
import { StoreRepositoryInMemory, RepresentativeRepositoryInMemory } from "../../../src/infra/repository";
import { RepositoryFactory } from "../../../src/application/factory";
import { Repository } from "../../../src/application/repository";
import { representativeDataMock, storeDataMock } from "../../doubles";

describe("GetStores tests.", () => {
    let storeData: StoreProps;
    let representativeData: RepresentativeProps;
    let storeRepository: StoreRepositoryInMemory;
    let representativeRepository: RepresentativeRepositoryInMemory;

    const repositoryFactoryMock: RepositoryFactory = {
        create (repository: string): Repository {
            if (repository === "StoreRepository") return storeRepository;
            if (repository === "RepresentativeRepository") return representativeRepository;
            throw new RepositoryNotFoundError();
        }
    };

    beforeEach(() => {
        storeData = Object.assign({}, storeDataMock);
        representativeData = Object.assign({}, representativeDataMock);
        storeRepository = new StoreRepositoryInMemory();
        representativeRepository = new RepresentativeRepositoryInMemory();
    });

    test("Should return a list of stores.", async () => {
        storeRepository.stores.push(Store.restore(storeData));
        representativeRepository.representatives.push(Representative.restore(representativeData));
        const getStores = new GetStores(repositoryFactoryMock);
        const stores = await getStores.execute();
        const store = stores[0];
        const representative = store.representatives[0];
        expect(stores).toHaveLength(1);
        expect(store.code).toBe(storeData.code);
        expect(store.name).toBe(storeData.name);
        expect(store.representatives).toHaveLength(1);
        expect(representative.name).toBe(representativeData.name);
        expect(representative.email).toBe(representativeData.email);
        expect(representative.phone).toBe(representativeData.phone);
        expect(representative.address).toBe(representativeData.address);
        expect(representative.role).toBe(representativeData.role);
    });
    
    test("Should return an empty list if no stores are found.", async () => {
        const getStores = new GetStores(repositoryFactoryMock);
        const stores = await getStores.execute();
        expect(stores).toHaveLength(0);
    });

    test("Should check if repositoryFactory.create was called.", async () => {
        const repositoryFactorySpy = jest.spyOn(repositoryFactoryMock, "create");
        const getStores = new GetStores(repositoryFactoryMock);
        await getStores.execute();
        expect(repositoryFactorySpy).toHaveBeenCalledTimes(2);
        expect(repositoryFactorySpy).toHaveBeenCalledWith("StoreRepository");
        expect(repositoryFactorySpy).toHaveBeenCalledWith("RepresentativeRepository");
    });

    test("Should check if storeRepository.findAll was called.", async () => {
        const storeRepositorySpy = jest.spyOn(storeRepository, "findAll");
        const getStores = new GetStores(repositoryFactoryMock);
        await getStores.execute();
        expect(storeRepositorySpy).toHaveBeenCalledTimes(1);
    });

    test("Should check if representativeRepository.findAllByStoreId was called.", async () => {
        storeRepository.stores.push(Store.restore(storeData));
        const representativeRepositorySpy = jest.spyOn(representativeRepository, "findAllByStoreId");
        const getStores = new GetStores(repositoryFactoryMock);
        await getStores.execute();
        expect(representativeRepositorySpy).toHaveBeenCalledTimes(1);
        expect(representativeRepositorySpy).toHaveBeenCalledWith(storeData.id);
    });
});
