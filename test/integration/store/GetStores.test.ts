import GetStores from "../../../src/application/usecase/store/GetStores";
import StoreRepositoryInMemery from "../../../src/infra/repository/store/StoreRepositoryInMemory";

describe("GetStores tests", () => {

    test("Should return a list of stores", async () => {
        const storeRepository = new StoreRepositoryInMemery();
        const store = {
            code: "code",
            name: "name"
        };
        storeRepository.stores.push(store);
        const getStores = new GetStores(storeRepository);
        const stores = await getStores.execute();
        expect(stores).toHaveLength(1);
        expect(stores[0].code).toBe(store.code);
        expect(stores[0].name).toBe(store.name);
    });
    
    test("Should return an empty list if no stores are found", async () => {
        const storeRepository = new StoreRepositoryInMemery();
        const getStores = new GetStores(storeRepository);
        const stores = await getStores.execute();
        expect(stores).toHaveLength(0);
    });

    test("Should check if StoreRepository.findAll was called", async () => {
        const storeRepository = new StoreRepositoryInMemery();
        const storeRepositorySpy = jest.spyOn(storeRepository, "findAll");
        const getStores = new GetStores(storeRepository);
        await getStores.execute();
        expect(storeRepositorySpy).toHaveBeenCalled();
    });
});
