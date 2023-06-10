import EntityId from "../EntityId";

export default class Expense {
    readonly id: EntityId;
    
    constructor (
        readonly shoppingId: string,
        readonly storeId: string,
        readonly userId: string,
        readonly description: string,
        readonly amount: number,
        readonly dueDate: string,
        readonly delayedDays: number,
        id?: string
    ) {
        this.id = new EntityId(id);
    }
}
