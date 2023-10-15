import { Shopping, ShoppingProps } from "../../../src/domain/entity";

describe("Shopping unit tests", () => {
    let shoppingData: ShoppingProps;

    beforeEach(() => {
        shoppingData = {
            id: "78e356d3-b44e-4328-9983-b79d4e684a24",
            code: "10000",
            name: "SHOP01",
            description: "SHOPPING 01"
        };
    });

    test("Should create a shopping", () => {
        const shopping = Shopping.create(shoppingData);
        expect(shopping.id).toBeDefined();
        expect(shopping.code).toBe(shoppingData.code);
        expect(shopping.name).toBe(shoppingData.name);
        expect(shopping.description).toBe(shoppingData.description);
    });
    
    test("Should restore a database shopping", () => {
        const shopping = Shopping.restore(shoppingData);
        expect(shopping.id).toBe(shoppingData.id);
        expect(shopping.code).toBe(shoppingData.code);
        expect(shopping.name).toBe(shoppingData.name);
        expect(shopping.description).toBe(shoppingData.description);
    });
});
