import Connection from "./Connection";
import pgp from "pg-promise";

export default class PgPromiseAdapter implements Connection {
    private connection: any;

    constructor (private connectionUrl: any) {
        this.connection = pgp()(connectionUrl);
    }

    async query (statement: string, params: any): Promise<any> {
        return await this.connection.query(statement, params);
    }

    async close (): Promise<void> {
        await this.connection.$pool.end();
    }
}
