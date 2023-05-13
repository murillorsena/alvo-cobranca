import Store from "../../../src/domain/entity/store/Store";
import GetStores from "../../../src/application/usecase/store/GetStores";
import StoreRepositoryInMemory from "../../../src/infra/repository/store/StoreRepositoryInMemory";
import RepresentativeRepositoryInMemory from "../../../src/infra/repository/store/RepresentativeRepositoryInMemory";

describe("GetStores tests", () => {

    test("Should return a list of stores", async () => {
        const storeRepository = new StoreRepositoryInMemory();
        const representativeRepository = new RepresentativeRepositoryInMemory();
        const storeData = {
            code: "code",
            name: "name"
        };
        storeRepository.stores.push(new Store(storeData.code, storeData.name));
        const getStores = new GetStores(storeRepository, representativeRepository);
        const stores = await getStores.execute();
        expect(stores).toHaveLength(1);
        expect(stores[0].code).toBe(storeData.code);
        expect(stores[0].name).toBe(storeData.name);
        expect(stores[0].representatives).toHaveLength(0);
    });
    
    test("Should return an empty list if no stores are found", async () => {
        const storeRepository = new StoreRepositoryInMemory();
        const representativeRepository = new RepresentativeRepositoryInMemory();
        const getStores = new GetStores(storeRepository, representativeRepository);
        const stores = await getStores.execute();
        expect(stores).toHaveLength(0);
    });

    test("Should check if StoreRepository.findAll was called", async () => {
        const storeRepository = new StoreRepositoryInMemory();
        const representativeRepository = new RepresentativeRepositoryInMemory();
        const storeRepositorySpy = jest.spyOn(storeRepository, "findAll");
        const getStores = new GetStores(storeRepository, representativeRepository);
        await getStores.execute();
        expect(storeRepositorySpy).toHaveBeenCalled();
    });

    test("Should check if RepresentativeRepository.findAllByStoreId was called", async () => {
        const storeRepository = new StoreRepositoryInMemory();
        const representativeRepository = new RepresentativeRepositoryInMemory();
        const representativeRepositorySpy = jest.spyOn(representativeRepository, "findAllByStoreId");
        const storeData = {
            code: "code",
            name: "name"
        };
        storeRepository.stores.push(new Store(storeData.code, storeData.name));
        const getStores = new GetStores(storeRepository, representativeRepository);
        await getStores.execute();
        expect(representativeRepositorySpy).toHaveBeenCalled();
    });
});
