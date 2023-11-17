import { DatabaseMigration } from "../migration";
import { DatabaseConnection } from "../../database";

export class CreateNotificationTable implements DatabaseMigration {

    constructor (private connection: DatabaseConnection) {}

    async up (): Promise<void> {
        const statement = `
            DROP TABLE IF EXISTS "notification" CASCADE;

            CREATE TABLE IF NOT EXISTS "notification" (
                "id" UUID NOT NULL,
                "type" TEXT NOT NULL,
                "content" TEXT NOT NULL,
                "user_id" UUID NOT NULL,
                "store_id" UUID NOT NULL,
                "shopping_id" UUID NOT NULL,
                "created_at" DATE NOT NULL,
                "updated_at" DATE,
                PRIMARY KEY ("id")
            );

            INSERT INTO "notification"
                ("id", "type", "content", "user_id", "store_id", "shopping_id", "created_at")
            VALUES
                ('56227f4d-f66f-40c9-bc49-c682769dfa4e', 'call', 'chamada efetuada', '531152c2-3157-478f-907e-f7f527a4eb65', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', '2023-11-12T00:22:57.110Z'),
                ('f885e038-9500-43c8-9371-b29148ea6576', 'email', 'email enviado', '531152c2-3157-478f-907e-f7f527a4eb65', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', '2023-11-11T00:22:57.110Z'),
                ('531152c2-3157-478f-907e-f7f527a4eb65', 'message', 'mensagem enviada', '531152c2-3157-478f-907e-f7f527a4eb65', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', '2023-11-10T00:22:57.110Z');
        `;
        await this.connection.query(statement, []);
    }

    async down (): Promise<void> {
        const statement = `
            DROP TABLE IF EXISTS "notification" CASCADE;
        `;
        await this.connection.query(statement, []);
    }
}
