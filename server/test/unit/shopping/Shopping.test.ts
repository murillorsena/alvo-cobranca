import Shopping from "../../../src/domain/entity/shopping/Shopping";

describe("Shopping unit tests", function () {
    const shoppingData = {
        id: "78e356d3-b44e-4328-9983-b79d4e684a24",
        code: "10000",
        name: "SHOP01",
        description: "SHOPPING 01"
    };

    test("Should create a shopping", function () {
        const shopping = Shopping.create(
            shoppingData.code,
            shoppingData.name,
            shoppingData.description
        );
        expect(shopping.code).toBe(shoppingData.code);
        expect(shopping.name).toBe(shoppingData.name);
        expect(shopping.description).toBe(shoppingData.description);
    });
    
    test("Should restore a database shopping", function () {
        const shopping = Shopping.restore(
            shoppingData.id,
            shoppingData.code,
            shoppingData.name,
            shoppingData.description
        );
        expect(shopping.id).toBe(shoppingData.id);
        expect(shopping.code).toBe(shoppingData.code);
        expect(shopping.name).toBe(shoppingData.name);
        expect(shopping.description).toBe(shoppingData.description);
    });
});