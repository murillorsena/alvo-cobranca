import { Expense } from "../domain/entity";
import { ExpenseService } from "../services";
import { HttpClient } from "../infra/http";

export class ExpenseServiceHttp implements ExpenseService {

    constructor (
        private httpClient: HttpClient, 
        private baseUrl: string
    ) {}
    
    async getExpenses(): Promise<any> {
        const url = `${this.baseUrl}/`;
        const expensesData = await this.httpClient.get(url);
        const expenses: Expense[] = [];
        for (const expenseData of expensesData) {
            const expense = new Expense(
                expenseData.storeCode,
                expenseData.storeName,
                expenseData.shoppingName,
                expenseData.userName,
                expenseData.description,
                expenseData.amount,
                expenseData.dueDate
            );
            expenses.push(expense);
        }
        return expenses;
    }
}
