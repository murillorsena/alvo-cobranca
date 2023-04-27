import GetStoreByCode from "../../../src/application/usecase/store/GetStoreByCode";
import StoreRepositoryInMemory from "../../../src/infra/repository/store/StoreRepositoryInMemory";
import RepresentativeRepositoryInMemory from "../../../src/infra/repository/store/RepresentativeRepositoryInMemory";

describe("GetStoreByCode tests", () => {

    test("Should return a store by code", async () => {
        const storeRepository = new StoreRepositoryInMemory();
        const representativeRepository = new RepresentativeRepositoryInMemory();
        const storeData = {
            code: "fake-code",
            name: "fake-name"
        };
        storeRepository.stores.push(storeData);
        const getStoreByCode = new GetStoreByCode(storeRepository, representativeRepository);
        const input = {
            code: storeData.code
        };
        const store = await getStoreByCode.execute(input);
        expect(store.code).toBe(storeData.code);
        expect(store.name).toBe(storeData.name);
    });

    test("Should return an error if no store is found by the code", async () => {
        const storeRepository = new StoreRepositoryInMemory();
        const representativeRepository = new RepresentativeRepositoryInMemory();
        const getStoreByCode = new GetStoreByCode(storeRepository, representativeRepository);
        const input = {
            code: "fake-code"
        };
        expect(() => getStoreByCode.execute(input)).rejects.toThrow(new Error("Store not found"));
    });

    test("Should check if StoreRepository.findByCode was called", async () => {
        const storeRepository = new StoreRepositoryInMemory();
        const storeRepositorySpy = jest.spyOn(storeRepository, "findByCode");
        const representativeRepository = new RepresentativeRepositoryInMemory();
        const storeData = {
            code: "fake-code",
            name: "fake-name"
        };
        storeRepository.stores.push(storeData);
        const getStoreByCode = new GetStoreByCode(storeRepository, representativeRepository);
        const input = {
            code: storeData.code
        };
        await getStoreByCode.execute(input);
        expect(storeRepositorySpy).toHaveBeenCalled();
        expect(storeRepositorySpy).toHaveBeenCalledWith(input.code);
    });

    test("Should check if RepresentativeRepository.findAllByStoreCode", async () => {
        const storeRepository = new StoreRepositoryInMemory();
        const representativeRepository = new RepresentativeRepositoryInMemory();
        const representativeRepositorySpy = jest.spyOn(representativeRepository, "findAllByStoreCode");
        const storeData = {
            code: "fake-store-code",
            name: "fake-store-name"
        };
        storeRepository.stores.push(storeData);
        const getStoreByCode = new GetStoreByCode(storeRepository, representativeRepository);
        const input = {
            code: "fake-store-code"
        };
        await getStoreByCode.execute(input);
        expect(representativeRepositorySpy).toHaveBeenCalled();
        expect(representativeRepositorySpy).toHaveBeenCalledWith(input.code);
    });
});
