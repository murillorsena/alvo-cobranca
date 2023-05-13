import UniqueEntityId from "../UniqueEntityId";
import Amount from "./Amount";
import DueDate from "./DueDate";

export default class Expense {
    readonly id: UniqueEntityId;
    readonly amount: Amount;
    readonly dueDate: DueDate;
    readonly delayedDays: number;
    
    constructor (
        readonly shoppingCode: string,
        readonly storeCode: string,
        readonly userId: string,
        readonly description: string,
        amount: number,
        dueDate: Date,
        id?: string
    ) {
        this.id = new UniqueEntityId(id);
        this.amount = new Amount(amount);
        this.dueDate = new DueDate(dueDate);
        this.delayedDays = this.calculateDelayedDays(new Date(), dueDate);
    }

    private calculateDelayedDays (todayDate: Date, dueDate: Date) {
        const diff = todayDate.getTime() - dueDate.getTime();
        const dayInMillisecond = (1000 * 60 * 60 * 24);
        const days = Math.floor(diff / dayInMillisecond);
        return days;
    }
}
