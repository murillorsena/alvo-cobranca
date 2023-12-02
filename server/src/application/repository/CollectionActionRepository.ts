import { CollectionAction } from "../../domain/entity";
import { Repository } from ".";

export interface CollectionActionRepository extends Repository {
    save (notification: CollectionAction): Promise<void>;
    update (notification: CollectionAction): Promise<void>;
    findAll (): Promise<CollectionAction[]>;
    findById (id: string): Promise<CollectionAction | null>;
    findAllByStoreId (storeId: string): Promise<CollectionAction[]>;
}
