import { Entity, EntityId } from "../../entity";

export class Expense implements Entity {
    
    private constructor (
        readonly id: string,
        readonly shoppingId: string,
        readonly storeId: string,
        readonly userId: string,
        readonly description: string,
        readonly amount: number,
        readonly dueDate: string,
        readonly delayedDays: number
    ) {}

    static create (props: Omit<ExpenseProps, "id">): Expense {
        const { shoppingId, storeId, userId, description, amount, dueDate, delayedDays } = props;
        const expenseId = EntityId.generate();
        return new Expense(expenseId, shoppingId, storeId, userId, description, amount, dueDate, delayedDays);
    }

    static restore (props: ExpenseProps): Expense {
        const { id, shoppingId, storeId, userId, description, amount, dueDate, delayedDays } = props;
        return new Expense(id, shoppingId, storeId, userId, description, amount, dueDate, delayedDays);
    }
}

export type ExpenseProps = {
    id: string,
    shoppingId: string,
    storeId: string,
    userId: string,
    description: string,
    amount: number,
    dueDate: string,
    delayedDays: number
};
