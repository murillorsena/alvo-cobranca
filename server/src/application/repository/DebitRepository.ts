import { Debit } from "../../domain/entity";
import { Repository } from "../repository";

export interface DebitRepository extends Repository {
    findAll (): Promise<Debit[]>;
    findAllByStoreId (storeId: string): Promise<Debit[]>;
}
