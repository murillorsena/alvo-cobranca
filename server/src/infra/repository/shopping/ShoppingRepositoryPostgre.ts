import { Shopping } from "../../../domain/entity";
import { ShoppingRepository } from "../../../application/repository";
import { DatabaseConnection } from "../../database/DatabaseConnection";

export class ShoppingRepositoryPostgre implements ShoppingRepository {

    constructor (private connection: DatabaseConnection) {}

    private restore (shoppingData: any): Shopping {
        const props = {
            id: shoppingData.id,
            code: shoppingData.code,
            name: shoppingData.name,
            description: shoppingData.description
        };
        return Shopping.restore(props);
    }

    async findAll (): Promise<Shopping[]> {
        const statement = `
            SELECT "id", "code", "name", "description"
            FROM "shopping";
        `;
        const shoppingsData = await this.connection.query(statement, []);
        const shoppings: Shopping[] = [];
        for (const shoppingData of shoppingsData) {
            const shopping = this.restore(shoppingData);
            shoppings.push(shopping);
        }
        return shoppings;
    }

    async findById (id: string): Promise<Shopping | null> {
        const statement = `
            SELECT "id", "code", "name", "description"
            FROM "shopping"
            WHERE "id" = ?;
        `;
        const [ shoppingData ] = await this.connection.query(statement, [ id ]);
        if (!shoppingData) return null;
        const shopping = this.restore(shoppingData);
        return shopping;
    }
}
