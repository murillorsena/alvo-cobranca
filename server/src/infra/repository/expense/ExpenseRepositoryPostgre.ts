import { Expense } from "../../../domain/entity";
import { ExpenseRepository } from "../../../application/repository";
import { DatabaseConnection } from "../../database";

export class ExpenseRepositoryPostgre implements ExpenseRepository {

    constructor (private connection: DatabaseConnection) {}

    private restore (expenseData: any): Expense {
        const props = {
            id: expenseData.id, 
            storeId: expenseData.store_id,
            shoppingId: expenseData.shopping_id,
            userId: expenseData.user_id,
            description: expenseData.description,
            amount: parseInt(expenseData.amount),
            dueDate: expenseData.due_date
        };
        return Expense.restore(props);
    }

    async findAll (): Promise<Expense[]> {
        const statement = `
            SELECT "id", "store_id", "shopping_id", "user_id", "description", "amount", "due_date"
            FROM "expense"
        `;
        const params: [] = [];
        const expensesData = await this.connection.query(statement, params);
        const expenses: Expense[] = [];
        for (const expenseData of expensesData) {
            const expense = this.restore(expenseData);
            expenses.push(expense);
        }
        return expenses;
    }

    async findAllByStoreId (storeId: string): Promise<Expense[]> {
        const statement = `
            SELECT "id", "store_id", "shopping_id", "user_id", "description", "amount", "due_date"
            FROM "expense"
            WHERE "store_id" = $1;
        `;
        const params = [ storeId ];
        const expensesData = await this.connection.query(statement, params);
        const expenses: Expense[] = [];
        for (const expenseData of expensesData) {
            const expense = this.restore(expenseData);
            expenses.push(expense);
        }
        return expenses;
    }

    async findStoreId (): Promise<any> {
        const statement = `
            SELECT "store_id" AS "storeId"
            FROM "expense"
            GROUP BY "store_id";
        `;
        const result = await this.connection.query(statement, []);
        return result;
    }

    async sumAmount (storeId: string): Promise<number> {
        const statement = `
            SELECT SUM("amount") AS "amount"
            FROM "expense"
            WHERE "store_id" = $1;
        `;
        const [ result ] = await this.connection.query(statement, [ storeId ]);
        return parseInt(result.amount);
    }
    
    async minDueDate (storeId: string): Promise<number> {
        const statement = `
            SELECT (CURRENT_DATE - MIN("due_date")) AS "delayed_days"
            FROM "expense"
            WHERE "store_id" = $1;
        `;
        const [ result ] = await this.connection.query(statement, [ storeId ]);
        return result.delayed_days;
    }
}
