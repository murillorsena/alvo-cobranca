import { Shopping, ShoppingProps } from "../../../src/domain/entity";
import { shoppingDataMock } from "../../doubles";

describe("Shopping unit tests.", () => {
    let shoppingData: ShoppingProps;

    beforeEach(() => {
        shoppingData = Object.assign({}, shoppingDataMock);
    });

    test("Should create a shopping.", () => {
        const shopping = Shopping.create(shoppingData);
        expect(shopping.id).toBeDefined();
        expect(shopping.code).toBe(shoppingData.code);
        expect(shopping.name).toBe(shoppingData.name);
        expect(shopping.description).toBe(shoppingData.description);
    });
    
    test("Should restore a database shopping.", () => {
        const shopping = Shopping.restore(shoppingData);
        expect(shopping.id).toBe(shoppingData.id);
        expect(shopping.code).toBe(shoppingData.code);
        expect(shopping.name).toBe(shoppingData.name);
        expect(shopping.description).toBe(shoppingData.description);
    });
});
