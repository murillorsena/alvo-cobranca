import Expense from "../../../domain/entity/expense/Expense";
import ExpenseRepository from "../../../application/repository/ExpenseRepository";
import Connection from "../../database/Connection";

export default class ExpenseRepositoryDatabase implements ExpenseRepository {

    constructor (private connection: Connection) {}

    async findAll (): Promise<Expense[]> {
        const expensesData = await this.connection.query('SELECT * FROM "expense";', []);
        const expenses: Expense[] = [];
        for (const expenseData of expensesData) {
            expenses.push(new Expense(
                expenseData.shopping_code,
                expenseData.store_code,
                expenseData.user_id,
                expenseData.description,
                expenseData.amount,
                expenseData.due_date,
                expenseData.id
            ));
        }
        return expenses;
    }
}
