import { Debit } from "../../../domain/entity";
import { DebitRepository } from "../../../application/repository";

export class DebitRepositoryInMemory implements DebitRepository {
    public debits: Debit[];

    constructor () {
        this.debits = [];
    }
    
    async findAll (): Promise<Debit[]> {
        const debits = this.debits;
        return debits;
    }
    
    async findAllByStoreId (storeId: string): Promise<Debit[]> {
        throw new Error("Method not implemented.");
    }
    
    async findStoreId (): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
    async sumAmount (storeId: string): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async minDueDate (storeId: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
}
