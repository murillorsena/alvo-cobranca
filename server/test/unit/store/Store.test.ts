import { Store, StoreProps } from "../../../src/domain/entity";

describe("Store unit tests", () => {
    let storeData: StoreProps;

    beforeEach(() => {
        storeData = {
            id: "ae990c93-192c-4d8c-bc16-cf2dd93161cd",
            code: "10001",
            name: "LOJA 01"
        };
    });

    test("Should create a store", () => {
        const store = Store.create(storeData);
        expect(store.id).toBeDefined();
        expect(store.code).toBe(storeData.code);
        expect(store.name).toBe(storeData.name);
    });

    test("Should restore a database store", () => {
        const store = Store.restore(storeData);
        expect(store.id).toBe(storeData.id);
        expect(store.code).toBe(storeData.code);
        expect(store.name).toBe(storeData.name);
    });
});
