import { Expense } from "../domain/entity";

export interface ExpenseService {
    getExpenses (): Promise<Expense[]>;
}
