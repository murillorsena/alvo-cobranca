import Expense from "../../domain/entity/expense/Expense";

export default interface ExpenseRepository {
    findAll (): Promise<Expense[]>;
    findAllByStoreId (storeId: string): Promise<Expense[]>;
    findStoreId (): Promise<any>;
    sumAmount (storeId: string): Promise<any>;
    minDueDate (storeId: string): Promise<any>;
}
