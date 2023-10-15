import { Store, StoreProps, Representative, RepresentativeProps } from "../../../src/domain/entity";
import { GetStoreById } from "../../../src/application/usecase";
import { StoreNotFoundError } from "../../../src/application/error";
import { StoreRepositoryInMemory, RepresentativeRepositoryInMemory } from "../../../src/infra/repository";
import { RepositoryFactory } from "../../../src/application/factory";
import { Repository } from "../../../src/application/repository";

describe("GetStoreById tests", () => {
    let storeData: StoreProps;
    let representativeData: RepresentativeProps;
    let storeRepository: StoreRepositoryInMemory;
    let representativeRepository: RepresentativeRepositoryInMemory;

    const repositoryFactoryMock: RepositoryFactory = {
        create (repositoryName: string): Repository {
            if (repositoryName === "StoreRepository") return storeRepository;
            if (repositoryName === "RepresentativeRepository") return representativeRepository;
            throw new Error("Repository not implemented.");
        }
    };

    beforeEach(() => {
        storeData = {
            id: "66664842-1ae8-44fc-95b1-698836e6d6e0",
            code: "10001",
            name: "LOJA 01"
        };
        representativeData = {
            id: "id",
            name: "name",
            email: "email",
            phone: "phone",
            address: "address",
            storeId: storeData.id
        };
        storeRepository = new StoreRepositoryInMemory();
        representativeRepository = new RepresentativeRepositoryInMemory();
    });

    test("Should return a store by id", async () => {
        storeRepository.stores.push(Store.restore(storeData));
        representativeRepository.representatives.push(Representative.restore(representativeData));
        const getStoreById = new GetStoreById(repositoryFactoryMock);
        const input = {
            storeId: storeData.id
        };
        const store = await getStoreById.execute(input);
        const representative = store.representatives[0];
        expect(store.code).toBe(storeData.code);
        expect(store.name).toBe(storeData.name);
        expect(store.representatives).toHaveLength(1);
        expect(representative.name).toBe(representativeData.name);
        expect(representative.email).toBe(representativeData.email);
        expect(representative.phone).toBe(representativeData.phone);
        expect(representative.address).toBe(representativeData.address);
    });

    test("Should return an error if no store is found by id", async () => {
        const getStoreById = new GetStoreById(repositoryFactoryMock);
        const input = {
            storeId: storeData.id
        };
        expect(() => getStoreById.execute(input)).rejects.toThrow(new StoreNotFoundError());
    });

    test("Should check if storeRepository.findById was called", async () => {
        storeRepository.stores.push(Store.restore(storeData));
        const storeRepositorySpy = jest.spyOn(storeRepository, "findById");
        const getStoreById = new GetStoreById(repositoryFactoryMock);
        const input = {
            storeId: storeData.id
        };
        await getStoreById.execute(input);
        expect(storeRepositorySpy).toHaveBeenCalledTimes(1);
        expect(storeRepositorySpy).toHaveBeenCalledWith(input.storeId);
    });

    test("Should check if representativeRepository.findAllByStoreId was called", async () => {
        storeRepository.stores.push(Store.restore(storeData));
        const representativeRepositorySpy = jest.spyOn(representativeRepository, "findAllByStoreId")
        const input = {
            storeId: storeData.id
        };
        const getStoreById = new GetStoreById(repositoryFactoryMock);
        await getStoreById.execute(input);
        expect(representativeRepositorySpy).toHaveBeenCalledTimes(1);
        expect(representativeRepositorySpy).toHaveBeenCalledWith(input.storeId);
    });
});
