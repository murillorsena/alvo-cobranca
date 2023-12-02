    import { Entity, EntityId } from "../../entity";
import { Period } from "../debit";

export class Debit implements Entity {
    
    private constructor (
        readonly id: string,
        readonly description: string,
        readonly amount: number,
        readonly dueDate: Date,
        readonly storeId: string,
        readonly shoppingId: string,
        readonly userId: string
    ) {}

    static create (props: Omit<DebitProps, "id">): Debit {
        const { description, amount, dueDate, storeId, shoppingId, userId } = props;
        const debitId = EntityId.generate();
        return new Debit(debitId, description, amount, dueDate, storeId, shoppingId, userId);
    }

    static restore (props: DebitProps): Debit {
        const { id, description, amount, dueDate, storeId, shoppingId, userId } = props;
        return new Debit(id, description, amount, dueDate, storeId, shoppingId, userId);
    }

    getDelayedDays (): number {
        const today = new Date();
        const period = new Period(this.dueDate, today);
        return period.getDiffInDays();
    }

    getStatus (): string {
        if (this.isOverdue()) return "overdue";
        if (this.isBecomingDue()) return "becoming due";
        return "open"; 
    }

    private isOverdue (): boolean {
        return this.getDelayedDays() > 0;
    }

    private isBecomingDue (): boolean {
        return this.getDelayedDays() >= -5 && this.getDelayedDays() <= 0;
    }
}

export type DebitProps = {
    id: string,
    description: string,
    amount: number,
    dueDate: Date,
    storeId: string,
    shoppingId: string,
    userId: string
};
