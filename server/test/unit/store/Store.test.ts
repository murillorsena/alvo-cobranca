import Store from "../../../src/domain/entity/store/Store";

describe("Store unit tests", function () {
    const storeData = {
        id: "ae990c93-192c-4d8c-bc16-cf2dd93161cd",
        code: "10001",
        name: "LOJA 01"
    };

    test("Should create a store", function () {
        const store = Store.create(
            storeData.code, 
            storeData.name
        );
        expect(store.code).toBe(storeData.code);
        expect(store.name).toBe(storeData.name);
    });

    test("Should restore a database store", function () {
        const store = Store.restore(
            storeData.id,
            storeData.code,
            storeData.name
        );
        expect(store.id).toBe(storeData.id);
        expect(store.code).toBe(storeData.code);
        expect(store.name).toBe(storeData.name);
    });
});
