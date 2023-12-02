import { DatabaseMigration } from ".";
import { DatabaseConnection } from "..";

export class CreateNotificationTable implements DatabaseMigration {

    constructor (private connection: DatabaseConnection) {}

    async up (): Promise<void> {
        const statement = `
            DROP TABLE IF EXISTS "collection_action" CASCADE;

            CREATE TABLE IF NOT EXISTS "collection_action" (
                "id" UUID NOT NULL,
                "type" TEXT NOT NULL,
                "title" TEXT NOT NULL,
                "content" TEXT NOT NULL,
                "created_at" DATE NOT NULL,
                "updated_at" DATE,
                "store_id" UUID NOT NULL,
                "user_id" UUID NOT NULL,
                PRIMARY KEY ("id")
            );

            INSERT INTO "collection_action"
                ("id", "type", "title", "content", "created_at", "updated_at", "store_id", "user_id")
            VALUES
                ('56227f4d-f66f-40c9-bc49-c682769dfa4e', 'call', 'Contato realizado', 'chamada efetuada', '2023-11-12T00:22:57.110Z', NULL, 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
                ('f885e038-9500-43c8-9371-b29148ea6576', 'whatsapp', 'Whatsapp enviado', 'email enviado', '2023-11-11T00:22:57.110Z', NULL, 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
                ('f4fc1bc9-1c48-42a2-aa24-222922b9a4ba', 'email', 'Email enviado', 'email enviado', '2023-11-11T00:22:57.110Z', NULL, 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
                ('531152c2-3157-478f-907e-f7f527a4eb65', 'message', 'Mensagem enviada', 'mensagem enviada', '2023-11-10T00:22:57.110Z', NULL, 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
                ('af67a54b-3be1-4d93-8b23-426a077c9657', 'meeting', 'Reunião agendada', 'mensagem enviada', '2023-11-10T00:22:57.110Z', NULL, 'ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
                ('fc817c8f-a51d-45f4-9f61-5cca7f078a81', 'notification', 'Notificação enviada', 'mensagem enviada', '2023-11-10T00:22:57.110Z', NULL, 'ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38', 'a2faeae0-1441-4a18-9bab-88f79b356eac');
        `;
        await this.connection.query(statement, []);
    }

    async down (): Promise<void> {
        const statement = `
            DROP TABLE IF EXISTS "collection_action" CASCADE;
        `;
        await this.connection.query(statement, []);
    }
}
