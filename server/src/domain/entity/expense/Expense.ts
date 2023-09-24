import Entity from "../Entity";
import crypto from "crypto";

export default class Expense implements Entity {
    
    constructor (
        readonly id: string,
        readonly shoppingId: string,
        readonly storeId: string,
        readonly userId: string,
        readonly description: string,
        readonly amount: number,
        readonly dueDate: string,
        readonly delayedDays: number,
    ) {}

    static create (shoppingId: string, storeId: string, userId: string, description: string, amount: number, dueDate: string, delayedDays: number) {
        const expenseId = crypto.randomUUID();
        return new Expense(expenseId, shoppingId, storeId, userId, description, amount, dueDate, delayedDays);
    }

    static restore (id: string, shoppingId: string, storeId: string, userId: string, description: string, amount: number, dueDate: string, delayedDays: number) {
        return new Expense(id, shoppingId, storeId, userId, description, amount, dueDate, delayedDays);
    }
}
