import { CollectionAction, CollectionActionProps } from "../../../src/domain/entity";
import { collectionActionDataMock } from "../../doubles";

describe("CollectionAction unit tests.", () => {
    let collectionActionData: CollectionActionProps;

    beforeEach(() => {
        collectionActionData = Object.assign({}, collectionActionDataMock);
    });

    test("Should create a collection action.", () => {
        const collectionAction = CollectionAction.create(collectionActionData);
        expect(collectionAction.id).toBeDefined();
        expect(collectionAction.type).toBe(collectionActionData.type);
        expect(collectionAction.content).toBe(collectionActionData.content);
        expect(collectionAction.createdAt).toBeDefined();
        expect(collectionAction.updatedAt).toBeNull();
        expect(collectionAction.userId).toBe(collectionActionData.userId);
        expect(collectionAction.storeId).toBe(collectionActionData.storeId);
    });
    
    test("Should restore a database collection action.", () => {
        const collectionAction = CollectionAction.restore(collectionActionData);
        expect(collectionAction.id).toBe(collectionActionData.id);
        expect(collectionAction.type).toBe(collectionActionData.type);
        expect(collectionAction.content).toBe(collectionActionData.content);
        expect(collectionAction.userId).toBe(collectionActionData.userId);
        expect(collectionAction.createdAt).toStrictEqual(new Date("2023-12-03T23:54:05.754Z"));
        expect(collectionAction.updatedAt).toBeNull();
        expect(collectionAction.storeId).toBe(collectionActionData.storeId);
    });
});
