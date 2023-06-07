import Expense from "../domain/entity/Expense";

export default interface ExpenseService {
    getExpenses (): Promise<Expense[]>;
}
