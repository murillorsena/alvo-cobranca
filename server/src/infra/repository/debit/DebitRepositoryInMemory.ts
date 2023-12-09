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
        const debits = this.debits.filter(debit => debit.storeId === storeId);
        return debits;
    }
}
