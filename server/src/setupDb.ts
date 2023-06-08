import DatabaseConnection from "./infra/database/DatabaseConnection";
import PgPromiseAdapter from "./infra/database/PgPromiseAdapter";

const connectionUrl = process.env.DB_URL;
const connection = new PgPromiseAdapter(connectionUrl);

(async function up (connection: DatabaseConnection) {

    await connection.query(`
        CREATE TABLE IF NOT EXISTS "shopping" (
            "id" UUID NOT NULL,
            "code" TEXT NOT NULL UNIQUE,
            "name" TEXT NOT NULL,
            "description" TEXT NOT NULL,
            PRIMARY KEY ("id")
        );
    `, []);
})(connection);
