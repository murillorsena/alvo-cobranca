import { randomUUID } from "crypto";

export default class Expense {
    readonly id: string;
    readonly delayedDays: number;
    
    constructor (
        readonly shoppingCode: string,
        readonly storeCode: string,
        readonly type: string,
        readonly amount: number,
        readonly dueDate: Date,
        id?: string
    ) {
        this.id = id || randomUUID();
        this.delayedDays = this.calculateDelayedDays();
    }

    private calculateDelayedDays () {
        const today = new Date();
        const diff = today.getTime() - this.dueDate.getTime();
        const day = (1000 * 60 * 60 * 24);
        const days = Math.floor(diff / day);
        return days;
    }
}
