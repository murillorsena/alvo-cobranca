import { Debit } from "../../../domain/entity";
import { DebitRepository } from "../../../application/repository";
import { DatabaseConnection } from "../../database";

export class DebitRepositoryPostgre implements DebitRepository {

    constructor (private connection: DatabaseConnection) {}

    private restore (debitData: any): Debit {
        const props = {
            id: debitData.id, 
            description: debitData.description,
            amount: debitData.amount,
            dueDate: debitData.due_date,
            compensatioDate: debitData.compensation_date,
            storeId: debitData.store_id,
            shoppingId: debitData.shopping_id,
            userId: debitData.user_id
        };
        return Debit.restore(props);
    }

    async findAll (): Promise<Debit[]> {
        const statement = `
            SELECT
                "id",
                "description",
                "amount",
                "due_date",
                "compensation_date",
                "store_id",
                "shopping_id",
                "user_id"
            FROM
                "debit";
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
            SELECT
                "id",
                "description",
                "amount",
                "due_date",
                "compensation_date",
                "store_id",
                "shopping_id",
                "user_id"
            FROM
                "debit"
            WHERE
                "store_id" = $1;
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
}
