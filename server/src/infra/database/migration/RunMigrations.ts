import { CreateUserTable, CreateStoreTable, CreateShoppingTable } from "../migration";
import { PgPromiseAdapter } from "../PgPromiseAdapter";
import { config } from "../../../config";

// const url = "postgres://admin:srt8ZEgFxkRZzRg3KlIuWLO00Of5gJAC@dpg-ckhb20212bvs73c9kf0g-a:5432/alvo_cobranca_qhoq";
const url = "postgres://esedjtpd:CqpoSvGB-95tPtod_y-lRsuv061BY5uv@bubble.db.elephantsql.com/esedjtpd";

const connection = new PgPromiseAdapter(url);
connection.connect();

// (async () => {
//     const res = await connection.query('SELECT * FROM "user";', []);
//     console.log(res);
// })();

// const createUserTable = new CreateUserTable(connection);

// (async () => await createUserTable.up())();
const createStoreTable = new CreateStoreTable(connection);
(async () => await createStoreTable.up())();
// new CreateShoppingTable(connection).up();
