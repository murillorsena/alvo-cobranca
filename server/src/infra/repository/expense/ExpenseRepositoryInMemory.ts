import Expense from "../../../domain/entity/expense/Expense";
import ExpenseRepository from "../../../application/repository/ExpenseRepository";

export default class ExpenseRepositoryDatabase implements ExpenseRepository {
    expenses: Expense[];

    constructor () {
        this.expenses = [];
    }

    async findAll (): Promise<Expense[]> {
        const expenses = this.expenses;
        return expenses;
    }
}
