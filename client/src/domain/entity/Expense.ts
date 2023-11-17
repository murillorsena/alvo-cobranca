export class Expense {
    readonly status: string;

    constructor (
        readonly storeCode: string,
        readonly storeName: string,
        readonly shoppingName: string,
        readonly userName: string,
        readonly description: string,
        readonly amount: number,
        readonly delayedDays: number
    ) {
        this.status = this.getStatus();
    }

    getStatus (): string {
        if (this.isOverDue()) return "overdue";
        if (this.isBecomingDue()) return "becoming due";
        return "open";
    }

    isBecomingDue (): boolean {
        return this.delayedDays >= -5 && this.delayedDays <= 0;
    }

    isOverDue (): boolean {
        return this.delayedDays > 0;
    }
}
