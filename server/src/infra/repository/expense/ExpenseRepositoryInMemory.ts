import { Expense } from "../../../domain/entity";
import { ExpenseRepository } from "../../../application/repository";

export class ExpenseRepositoryInMemory implements ExpenseRepository {
    public expenses: Expense[];

    constructor () {
        this.expenses = [];
    }
    
    async findAll (): Promise<Expense[]> {
        const expenses = this.expenses;
        return expenses;
    }
    
    async findAllByStoreId (storeId: string): Promise<Expense[]> {
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
