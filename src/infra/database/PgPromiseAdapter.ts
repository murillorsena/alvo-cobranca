import Connection from './Connection';
import pgp from 'pg-promise';

export default class PgPromiseAdapter implements Connection {
    private connection: any;

    constructor () {
        this.connection = pgp()("postgresql://postgres:ADMIN@localhost:5432/alvo_cobranca");
    }

    async query (statement: any, params: any): Promise<any> {
        return await this.connection.query(statement, params);
    }

    async close (): Promise<void> {
        await this.connection.$pool.end();
    }
}
