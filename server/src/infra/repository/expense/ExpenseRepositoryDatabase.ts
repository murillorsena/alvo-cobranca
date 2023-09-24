import Expense from "../../../domain/entity/expense/Expense";
import ExpenseRepository from "../../../application/repository/ExpenseRepository";
import DatabaseConnection from "../../database/DatabaseConnection";

export default class ExpenseRepositoryDatabase implements ExpenseRepository {

    constructor (private connection: DatabaseConnection) {}

    async findAll (): Promise<Expense[]> {
        const query = `
            SELECT "id", "shopping_id", "store_id", "user_id", "description", "amount", "due_date", (CURRENT_DATE - "due_date") AS "delayed_days"
            FROM "expense"
        `;
        const expensesData = await this.connection.query(query, []);
        const expenses: Expense[] = [];
        for (const expenseData of expensesData) {
            const expense = Expense.restore(
                expenseData.id, 
                expenseData.shopping_id,
                expenseData.store_id,
                expenseData.user_id,
                expenseData.description,
                parseInt(expenseData.amount),
                expenseData.due_date.toLocaleDateString("pt-BR"),
                expenseData.delayed_days
            );
            expenses.push(expense);
        }
        return expenses;
    }

    async findAllByStoreId (storeId: string): Promise<Expense[]> {
        const query = `
            SELECT "id", "shopping_id", "store_id", "user_id", "description", "amount", "due_date", (CURRENT_DATE - "due_date") AS "delayed_days"
            FROM "expense"
            WHERE "store_id" = ?;
        `;
        const expensesData = await this.connection.query(query, [ storeId ]);
        const expenses: Expense[] = [];
        for (const expenseData of expensesData) {
            const expense = Expense.restore(
                expenseData.id, 
                expenseData.shopping_id,
                expenseData.store_id,
                expenseData.user_id,
                expenseData.description,
                parseInt(expenseData.amount),
                expenseData.due_date.toLocaleDateString("pt-BR"),
                expenseData.delayed_days
            );
            expenses.push(expense);
        }
        return expenses;
    }

    async findStoreId (): Promise<any> {
        const query = `
            SELECT "store_id"
            FROM "expense"
            GROUP BY "store_id";
        `;
        const result = await this.connection.query(query, []);
        return result;
    }

    async sumAmount (storeId: string): Promise<number> {
        const query = `
            SELECT SUM("amount") AS "amount"
            FROM "expense"
            WHERE "store_id" = ?;
        `;
        const [ result ] = await this.connection.query(query, [ storeId ]);
        return parseInt(result.amount);;
    }
    
    async minDueDate (storeId: string): Promise<number> {
        const query = `
            SELECT (CURRENT_DATE - MIN("due_date")) AS "delayed_days"
            FROM "expense"
            WHERE "store_id" = ?;
        `;
        const [ result ] = await this.connection.query(query, [ storeId ]);
        return result.delayed_days;
    }
}
