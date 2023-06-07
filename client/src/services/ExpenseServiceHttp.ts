import ExpenseService from "./ExpenseService";
import HttpClient from "../infra/HttpClient";
import Expense from "../domain/entity/Expense";

export default class ExpenseServiceHttp implements ExpenseService {

    constructor (
        private httpClient: HttpClient, 
        private baseUrl: string
    ) {}
    
    async getExpenses(): Promise<any> {
        const expensesData = await this.httpClient.get(`${this.baseUrl}/`);
        const expenses: Expense[] = [];
        for (const expenseData of expensesData) {
            const expense = new Expense(
                expenseData.storeCode,
                expenseData.storeName,
                expenseData.shoppingName,
                expenseData.userName,
                expenseData.description,
                expenseData.amount,
                expenseData.delayedDays,
            );
            expenses.push(expense);
        }
        return expenses;
    }
}
