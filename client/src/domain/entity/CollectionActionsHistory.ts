import { Entity, CollectionAction } from ".";
import { DomainEvent } from "../../events";

export class CollectionActionsHistory extends Entity {

    constructor (readonly collectionActions: CollectionAction[]) {
        super();
    }

    addCollectionAction (input: AddCollectionActionInput): void {
        if (!input.type || !input.content) return;
        const collectionActionData = {
            type: input.type,
            content: input.content,
            storeId: input.storeId,
            userId: input.userId
        };
        const collectionAction = CollectionAction.create(collectionActionData);
        this.publish(new DomainEvent("addCollectionAction", collectionAction));
    }
}

type AddCollectionActionInput = {
    type: string,
    content: string,
    storeId: string,
    userId: string
};
