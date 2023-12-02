import { Debit } from "../../../domain/entity";
import { DebitRepository } from "../../../application/repository";
import { DatabaseConnection } from "../../database";

export class DebitRepositoryPostgre implements DebitRepository {

    constructor (private connection: DatabaseConnection) {}

    private restore (debitData: any): Debit {
        const props = {
            id: debitData.id, 
            description: debitData.description,
            amount: parseInt(debitData.amount),
            dueDate: debitData.due_date,
            storeId: debitData.store_id,
            shoppingId: debitData.shopping_id,
            userId: debitData.user_id
        };
        return Debit.restore(props);
    }

    async findAll (): Promise<Debit[]> {
        const statement = `
            SELECT "id", "description", "amount", "due_date", "store_id", "shopping_id", "user_id"
            FROM "debit"
        `;
        const params: [] = [];
        const debitsData = await this.connection.query(statement, params);
        const debits: Debit[] = [];
        for (const debitData of debitsData) {
            const debit = this.restore(debitData);
            debits.push(debit);
        }
        return debits;
    }

    async findAllByStoreId (storeId: string): Promise<Debit[]> {
        const statement = `
            SELECT "id", "description", "amount", "due_date", "store_id", "shopping_id", "user_id"
            FROM "debit"
            WHERE "store_id" = $1;
        `;
        const params = [ storeId ];
        const debitsData = await this.connection.query(statement, params);
        const debits: Debit[] = [];
        for (const debitData of debitsData) {
            const debit = this.restore(debitData);
            debits.push(debit);
        }
        return debits;
    }

    async findStoreId (): Promise<any> {
        const statement = `
            SELECT "store_id" AS "storeId"
            FROM "debit"
            GROUP BY "store_id";
        `;
        const result = await this.connection.query(statement, []);
        return result;
    }

    async sumAmount (storeId: string): Promise<number> {
        const statement = `
            SELECT SUM("amount") AS "amount"
            FROM "debit"
            WHERE "store_id" = $1;
        `;
        const [ result ] = await this.connection.query(statement, [ storeId ]);
        return parseInt(result.amount);
    }
    
    async minDueDate (storeId: string): Promise<number> {
        const statement = `
            SELECT (CURRENT_DATE - MIN("due_date")) AS "delayed_days"
            FROM "expense"
            WHERE "store_id" = $1;
        `;
        const [ result ] = await this.connection.query(statement, [ storeId ]);
        return result.delayed_days;
    }
}
