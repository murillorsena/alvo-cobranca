import Expense from "../../../domain/entity/Expense";
import ExpenseRepository from "../../repository/ExpenseRepository";

export default class GetExpenses {

    constructor (private expenseRepository: ExpenseRepository) {}

    async execute (): Promise<Output[]> {
        const expensesData = await this.expenseRepository.findAll();
        console.log("expenseData: ", expensesData);
        const output: Output[] = [];
        for (const expenseData of expensesData) {
            const expense = new Expense(
                expenseData.shoppingCode, 
                expenseData.storeCode, 
                expenseData.type,
                Number(expenseData.amount),
                new Date(expenseData.dueDate)
            );
            output.push(expense);
        }
        return output;
    }
}

type Output = {
    id: string,
    shoppingCode: string,
    storeCode: string,
    type: string,
    amount: number,
    dueDate: Date
};
