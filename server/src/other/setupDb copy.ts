import DatabaseConnection from "./infra/database/DatabaseConnection";

export default class SetupDb {

    constructor (private connection: DatabaseConnection) {}

    async up () {
        await this.connection.connect();
        await this.connection.query(`
            DROP TABLE IF EXISTS "shopping" CASCADE;

            CREATE TABLE IF NOT EXISTS "shopping" (
                "id" UUID NOT NULL,
                "code" TEXT NOT NULL UNIQUE,
                "name" TEXT NOT NULL,
                "description" TEXT NOT NULL,
                PRIMARY KEY ("id")
            );
        `, []);
        await this.connection.close();
    }

    async down () {
        await this.connection.query('DROP TABLE IF EXISTS "shopping" CASCADE;', []);
        await this.connection.close();
    }
}
