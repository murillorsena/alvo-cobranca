import { Debit } from "../../domain/entity";
import { Repository } from ".";

export interface DebitRepository extends Repository {
    findAll (): Promise<Debit[]>;
    findAllByStoreId (storeId: string): Promise<Debit[]>;
    findStoreId (): Promise<Debit | null>;
    sumAmount (storeId: string): Promise<any>;
    minDueDate (storeId: string): Promise<any>;
}
