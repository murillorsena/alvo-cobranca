import Expense from "../../../domain/entity/expense/Expense";
import ExpenseRepository from "../../../application/repository/ExpenseRepository";
import DatabaseConnection from "../../database/DatabaseConnection";

export default class ExpenseRepositoryDatabase implements ExpenseRepository {

    constructor (private connection: DatabaseConnection) {}

    async findAll (): Promise<Expense[]> {
        const expensesData = await this.connection.query('SELECT * FROM "expense";', []);
        const expenses: Expense[] = [];
        for (const expenseData of expensesData) {
            expenses.push(new Expense(
                expenseData.shopping_id,
                expenseData.store_id,
                expenseData.user_id,
                expenseData.description,
                expenseData.amount,
                new Date(expenseData.due_date),
                expenseData.id
            ));
        }
        return expenses;
    }
}
