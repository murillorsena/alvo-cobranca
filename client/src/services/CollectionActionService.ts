import { CollectionAction } from "../domain/entity";

export interface CollectionActionService {
    add (input: any): Promise<CollectionAction>;
    update (input: any): Promise<void>;
}
