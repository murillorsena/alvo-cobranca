import { DatabaseConnection } from "../database";
import pgp from "pg-promise";

export class PgPromiseAdapter implements DatabaseConnection {
    private connection: any;

    constructor (private connectionUrl: any) {}

    async connect (): Promise<void> {
        this.connection = pgp()(this.connectionUrl);
    }

    async query (statement: string, params: any): Promise<any> {
        return await this.connection.query(statement, params);
    }

    async close (): Promise<void> {
        await this.connection.$pool.end();
    }
}
