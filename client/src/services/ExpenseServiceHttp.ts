import { Expense } from "../domain/entity";
import { ExpenseService } from "../services";
import { HttpClient } from "../infra/http";

export class ExpenseServiceHttp implements ExpenseService {

    constructor (
        private httpClient: HttpClient, 
        private baseUrl: string
    ) {}

    // { key: "storeCode", title: "Código", align: "start", width: "5%" },
    // { key: "storeName", title: "Lojista", align: "start", width: "20%" },
    // { key: "shoppingName", title: "Shopping", align: "start", width: "10%" },
    // { key: "userName", title: "Especialista", align: "start", width: "5%" },
    // { key: "amount", title: "Montante", align: "start", width: "15%" },
    // { key: "delayedDays", title: "Maior Atraso", align: "start", width: "10%" },
    // { key: "actions", title: "Ações", align: "start", sortable: false, width: "5%" }
    
    async getExpenses(): Promise<any> {
        const url = `${this.baseUrl}/`;
        const expensesData = await this.httpClient.get(url);
        const expenses: any[] = [];
        // const expenses: Expense[] = [];
        for (const expenseData of expensesData) {
            const expense = {
                storeCode: expenseData.store.code,
                storeName: expenseData.store.name,
                storeEmail: expenseData.store.email,
                storePhone: expenseData.store.phone,
                shoppingName: expenseData.shopping.name,
                shoppingDescription: expenseData.shopping.description,
                userName: expenseData.user.name,
                amount: 1000.00,
                // amount: expenseData.debits[0],
                // amount: expenseData.debits.reduce((previuos: any, current: any) => current.amount),
                delayedDays: 1.,
                debits: expenseData.debits,
                actions: expenseData.actions,
                representatives: expenseData.representatives
            };
            // const expense = new Expense(
            //     expenseData.storeCode,
            //     expenseData.storeName,
            //     expenseData.shoppingName,
            //     expenseData.userName,
            //     expenseData.description,
            //     expenseData.amount,
            //     expenseData.dueDate
            // );
            expenses.push(expense);
            // expenses.push(expenseData);
        }
        console.log(expenses[0]);
        return expenses;
    }
}
