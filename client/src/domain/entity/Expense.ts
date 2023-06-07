export default class Expense {

    constructor (
        readonly storeCode: string,
        readonly storeName: string,
        readonly shoppingName: string,
        readonly userName: string,
        readonly description: string,
        readonly amount: number,
        readonly delayedDays: string
    ) {}

    getValue (): string {
        return `${this.storeCode}-${this.storeName}`;
    }
}
