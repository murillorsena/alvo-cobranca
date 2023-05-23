import Connection from "./infra/database/Connection";
import PgPromiseAdapter from "./infra/database/PgPromiseAdapter";

const connection = new PgPromiseAdapter(process.env.DB_URL);

(async function up (connection: Connection) {

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
