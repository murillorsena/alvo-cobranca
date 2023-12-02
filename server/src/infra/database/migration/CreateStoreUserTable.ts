import { DatabaseMigration } from "../migration";
import { DatabaseConnection } from "../../database";

export class CreateStoreUserTable implements DatabaseMigration {

    constructor (private connection: DatabaseConnection) {}

    async up (): Promise<void> {
        const statement = `
            DROP TABLE IF EXISTS "store_user" CASCADE;

            CREATE TABLE "store_user" (
                "store_id" UUID NOT NULL,
                "user_id" UUID NOT NULL
            );

            INSERT INTO "store_user"
                ("store_id", "user_id")
            VALUES
                ('b3edf713-bffe-4f4a-97eb-7c71e63e4091', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
                ('ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38', 'a2faeae0-1441-4a18-9bab-88f79b356eac');
        `;
        await this.connection.query(statement, []);
    }

    async down (): Promise<void> {
        const statement = `
            DROP TABLE IF EXISTS "store_user" CASCADE;
        `;
        await this.connection.query(statement, []);
    }
}
