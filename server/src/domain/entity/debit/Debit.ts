import { Entity, EntityId } from "../../entity";
import { Period } from "../debit";

export class Debit implements Entity {
 
    private constructor (
        readonly id: string,
        readonly description: string,
        readonly amount: number,
        readonly dueDate: Date,
        readonly compensationDate: Date | null,
        readonly storeId: string,
        readonly shoppingId: string,
        readonly userId: string
    ) {}

    static create (props: Omit<DebitProps, "id">): Debit {
        const { description, amount, dueDate, storeId, shoppingId, userId } = props;
        const debitId = EntityId.generate();
        const compensatioDate = null;
        return new Debit(debitId, description, amount, dueDate, compensatioDate, storeId, shoppingId, userId);
    }

    static restore (props: DebitProps): Debit {
        const { id, description, amount, dueDate, compensatioDate, storeId, shoppingId, userId } = props;
        const compensatioDateOrNull = compensatioDate ? new Date(compensatioDate) : compensatioDate;
        return new Debit(id, description, Number(amount), new Date(dueDate), compensatioDateOrNull, storeId, shoppingId, userId);
    }

    getDelayedDays (): number {
        const startDate = this.dueDate;
        const endDate = this.compensationDate ? new Date(this.compensationDate) : new Date();
        const period = new Period(startDate, endDate);
        return period.getDiffInDays();
    }

    getStatus (): string {
        if (this.wasPaid()) return "Pago";
        if (this.isOverdue()) return "Vencido";
        if (this.isBecomingDue()) return "Vencendo";
        return "À Vencer"; 
    }

    private wasPaid () {
        return this.compensationDate != null;
    }

    private isOverdue (): boolean {
        return this.getDelayedDays() > 0;
    }

    private isBecomingDue (): boolean {
        return this.getDelayedDays() >= -10 && this.getDelayedDays() <= 0;
    }
}

export type DebitProps = {
    id: string,
    description: string,
    amount: number,
    dueDate: Date,
    compensatioDate: Date | null,
    storeId: string,
    shoppingId: string,
    userId: string
};
