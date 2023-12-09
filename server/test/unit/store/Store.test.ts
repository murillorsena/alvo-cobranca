import { Store, StoreProps } from "../../../src/domain/entity";
import { storeDataMock } from "../../doubles";

describe("Store unit tests.", () => {
    let storeData: StoreProps;

    beforeEach(() => {
        storeData = Object.assign({}, storeDataMock);
    });
    
    test("Should create a store.", () => {
        const store = Store.create(storeData);
        expect(store.id).toBeDefined();
        expect(store.code).toBe(storeData.code);
        expect(store.name).toBe(storeData.name);
        expect(store.email).toBe(storeData.email);
        expect(store.phone).toBe(storeData.phone);
    });
    
    test("Should restore a database store.", () => {
        const store = Store.restore(storeData);
        expect(store.id).toBe(storeData.id);
        expect(store.code).toBe(storeData.code);
        expect(store.name).toBe(storeData.name);
        expect(store.email).toBe(storeData.email);
        expect(store.phone).toBe(storeData.phone);
    });
});
