import { InvalidParamError } from "../error";

export class CollectionAction {

    private constructor (
        public type: string,
        public content: string,
        readonly storeId: string,
        readonly userId: string,
        readonly createdAt?: Date,
        public updatedAt?: Date | null,
        readonly id?: string
    ) {
        if (!content) throw new InvalidParamError("content");
        if (!type) throw new InvalidParamError("type");
        if (!storeId) throw new InvalidParamError("storeId");
        if (!userId) throw new InvalidParamError("userId");
    }

    static create (props: Omit<CollectionActionProps, "id">): CollectionAction {
        const { type, content, storeId, userId } = props;
        return new CollectionAction(type, content, storeId, userId);
    }

    static restore (props: CollectionActionProps): CollectionAction {
        const { id, type, content, createdAt, updatedAt, storeId, userId } = props;
        return new CollectionAction(type, content, storeId, userId, createdAt, updatedAt, id);
    }
}

export type CollectionActionProps = {
    id: string,
    type: string,
    content: string,
    createdAt?: Date,
    updatedAt?: Date | null,
    storeId: string,
    userId: string
};
