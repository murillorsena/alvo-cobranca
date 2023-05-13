import Expense from "../../domain/entity/expense/Expense";

export default interface ExpenseRepository {
    findAll (): Promise<Expense[]>;
}
