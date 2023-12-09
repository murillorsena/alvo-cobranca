import { CollectionAction } from "../../../domain/entity";
import { CollectionActionRepository } from "../../../application/repository";

export class CollectionActionRepositoryInMemory implements CollectionActionRepository {
    collectionActions: CollectionAction[];

    constructor () {
        this.collectionActions = [];
    }

    async save (collectionAction: CollectionAction): Promise<void> {
        this.collectionActions.push(collectionAction);
    }
    
    async update (collectionAction: CollectionAction): Promise<void> {
        const { id, type, content } = collectionAction;
        this.collectionActions.find(collectionAction => {
            if (collectionAction.id === id) {
                collectionAction.type = type;
                collectionAction.content = content;
                collectionAction.updatedAt = new Date();
            }
        });
    }

    async findAll (): Promise<CollectionAction[]> {
        const collectionActions = this.collectionActions;
        return collectionActions;
    }

    async findById (id: string): Promise<CollectionAction | null> {
        const collectionAction = this.collectionActions.find(collectionAction => collectionAction.id === id);
        if (!collectionAction) return null;
        return collectionAction;
    }
    
    async findAllByStoreId (storeId: string): Promise<CollectionAction[]> {
        const collectionActions = this.collectionActions.filter(collectionAction => collectionAction.storeId === storeId);
        return collectionActions;
    }
}
