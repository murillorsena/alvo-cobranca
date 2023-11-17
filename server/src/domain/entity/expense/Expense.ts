import { Entity, EntityId } from "../../entity";
import { Period } from "../expense";

export class Expense implements Entity {
    
    private constructor (
        readonly id: string,
        readonly storeId: string,
        readonly shoppingId: string,
        readonly userId: string,
        readonly description: string,
        readonly amount: number,
        readonly dueDate: Date
    ) {}

    static create (props: Omit<ExpenseProps, "id">): Expense {
        const { storeId, shoppingId, userId, description, amount, dueDate } = props;
        const expenseId = EntityId.generate();
        return new Expense(expenseId, storeId, shoppingId, userId, description, amount, dueDate);
    }

    static restore (props: ExpenseProps): Expense {
        const { id, storeId, shoppingId, userId, description, amount, dueDate } = props;
        return new Expense(id, storeId, shoppingId, userId, description, amount, dueDate);
    }

    getDelayedDays (today: Date): number {
        const period = new Period(this.dueDate, today);
        return period.getDiffInDays();
    }

    getStatus (today: Date): string {
        if (this.isOverdue(today)) return "overdue";
        if (this.isBecomingDue(today)) return "becoming due";
        return "open"; 
    }

    private isOverdue (today: Date): boolean {
        return this.getDelayedDays(today) > 0;
    }

    private isBecomingDue (today: Date): boolean {
        return this.getDelayedDays(today) >= -5 && this.getDelayedDays(today) <= 0;
    }
}

export type ExpenseProps = {
    id: string,
    storeId: string,
    shoppingId: string,
    userId: string,
    description: string,
    amount: number,
    dueDate: Date
};
