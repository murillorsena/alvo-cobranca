import UseCase from "../UseCase";
import ExpenseRepository from "../../repository/ExpenseRepository";

export default class GetExpenses implements UseCase {

    constructor (private expenseRepository: ExpenseRepository) {}

    async execute (input: Input): Promise<Output[]> {
        const expenses = await this.expenseRepository.findAll();
        const output: Output[] = [];
        for (const expense of expenses) {
            output.push({
                id: expense.id.value,
                shoppingCode: expense.shoppingCode, 
                storeCode: expense.storeCode, 
                description: expense.description,
                amount: Number(expense.amount),
                dueDate: new Date(expense.dueDate.value)
            });
        }
        return output;
    }
}

type Input = {
    token: string
};

type Output = {
    id: string,
    shoppingCode: string,
    storeCode: string,
    description: string,
    amount: number,
    dueDate: Date
};
