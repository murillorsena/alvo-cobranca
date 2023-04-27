import Store from "../../../src/domain/entity/store/Store";

describe("Store tests", function () {

    test("Should create a store", function () {
        const store = new Store("code1", "store1");
        expect(store.name).toBe("store1");
    });
});
