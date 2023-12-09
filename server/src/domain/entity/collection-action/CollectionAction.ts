import { Entity, EntityId } from "../../entity";

export class CollectionAction implements Entity {

    private constructor (
        readonly id: string,
        public type: CollectionActionType,
        public content: string,
        readonly createdAt: Date,
        public updatedAt: Date | null,
        readonly storeId: string,
        readonly userId: string
    ) {}

    static create (props: Omit<CollectionActionProps, "id">): CollectionAction {
        const { type, content, storeId, userId } = props;
        const collectionActionId = EntityId.generate();
        const createdAt = new Date();
        const updatedAt = null;
        return new CollectionAction(collectionActionId, type, content, new Date(createdAt), updatedAt, storeId, userId);
    }
    
    static restore (props: CollectionActionProps): CollectionAction {
        const { id, type, content, createdAt, updatedAt, storeId, userId } = props;
        const updatedAtOrNull = updatedAt ? new Date(updatedAt): updatedAt;
        return new CollectionAction(id, type, content, new Date(createdAt), updatedAtOrNull, storeId, userId);
    }
}

export type CollectionActionType = "call" | "whatsapp" | "email" | "message" | "meeting" | "notification";

export type CollectionActionProps = {
    id: string,
    type: CollectionActionType,
    content: string,
    createdAt: Date,
    updatedAt: Date | null,
    storeId: string,
    userId: string
};
