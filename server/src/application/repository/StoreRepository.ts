import { Store } from "../../domain/entity";
import { Repository } from "../repository";

export interface StoreRepository extends Repository {
    findAll (): Promise<Store[]>;
    findById (id: string): Promise<Store | null>;
    findByCode (code: string): Promise<Store | null>;
}
