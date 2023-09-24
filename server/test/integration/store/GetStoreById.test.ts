import Store from "../../../src/domain/entity/store/Store";
import GetStoreById from "../../../src/application/usecase/store/GetStoreById";
import StoreRepositoryInMemory from "../../../src/infra/repository/store/StoreRepositoryInMemory";
import RepresentativeRepositoryInMemory from "../../../src/infra/repository/store/RepresentativeRepositoryInMemory";

describe("GetStoreById tests", () => {
    const storeData = {
        id: "66664842-1ae8-44fc-95b1-698836e6d6e0",
        code: "10001",
        name: "LOJA 01"
    };

    test("Should return a store by id", async () => {
        const storeRepository = new StoreRepositoryInMemory();
        const representativeRepository = new RepresentativeRepositoryInMemory();
        storeRepository.stores.push(Store.create(storeData.code, storeData.name));
        const getStoreById = new GetStoreById(storeRepository, representativeRepository);
        const input = {
            storeId: storeData.id
        };
        const store = await getStoreById.execute(input);
        expect(store.code).toBe(storeData.code);
        expect(store.name).toBe(storeData.name);
    });

    test("Should return an error if no store is found by id", async () => {
        const storeRepository = new StoreRepositoryInMemory();
        const representativeRepository = new RepresentativeRepositoryInMemory();
        const getStoreById = new GetStoreById(storeRepository, representativeRepository);
        const input = {
            storeId: storeData.id
        };
        expect(() => getStoreById.execute(input)).rejects.toThrow(new Error("Store not found"));
    });

    test("Should check if StoreRepository.findById was called", async () => {
        const storeRepository = new StoreRepositoryInMemory();
        const storeRepositorySpy = jest.spyOn(storeRepository, "findById");
        const representativeRepository = new RepresentativeRepositoryInMemory();
        const store = Store.create(storeData.code, storeData.name);
        storeRepository.stores.push(store);
        const getStoreById = new GetStoreById(storeRepository, representativeRepository);
        const input = {
            storeId: store.id
        };
        await getStoreById.execute(input);
        expect(storeRepositorySpy).toHaveBeenCalledTimes(1);
        expect(storeRepositorySpy).toHaveBeenCalledWith(input.storeId);
    });

    test("Should check if RepresentativeRepository.findAllByStoreId was called", async () => {
        const storeRepository = new StoreRepositoryInMemory();
        const representativeRepository = new RepresentativeRepositoryInMemory();
        const representativeRepositorySpy = jest.spyOn(representativeRepository, "findAllByStoreId")
        const store = Store.create(storeData.code, storeData.name);
        storeRepository.stores.push(store);
        const input = {
            storeId: store.id
        };
        const getStoreById = new GetStoreById(storeRepository, representativeRepository);
        await getStoreById.execute(input);
        expect(representativeRepositorySpy).toHaveBeenCalledTimes(1);
        expect(representativeRepositorySpy).toHaveBeenCalledWith(input.storeId);
    });
});
