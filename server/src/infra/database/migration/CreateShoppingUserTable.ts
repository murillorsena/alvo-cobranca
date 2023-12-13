import { DatabaseMigration } from ".";
import { DatabaseConnection } from "..";

export class CreateShoppingUserTable implements DatabaseMigration {

    constructor (private connection: DatabaseConnection) {}

    async up (): Promise<void> {
        const statement = `
            DROP TABLE IF EXISTS "shopping_user" CASCADE;

            CREATE TABLE "shopping_user" (
                "shopping_id" UUID NOT NULL,
                "user_id" UUID NOT NULL
            );

            INSERT INTO "shopping_user"
                ("shopping_id", "user_id")
            VALUES
                ('0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
                ('caadb02c-ff70-4073-89aa-b406b633d68d', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
                ('0d986235-5e8c-434e-a290-5fa65878a7ec', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
                ('4f8609f3-f45d-4d7d-a5fd-9f1fa46baaab', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
                ('6a021ef2-ebca-4d3e-a8e1-443b5261cf22', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
                ('037cdc11-d767-4a8a-b15e-5eba194b3904', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
                ('f27d5dec-2b45-427e-96a7-859335c4c2ca', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
                ('11e4e51c-dc76-4454-8c6a-4e4f8a14b806', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
                ('2475a51e-f0f8-4239-a32b-819be34ecd63', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
                ('7cf491b2-1cd5-4bd6-a2fa-8a32194ff1d4', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
                ('015c8fba-4d4e-4387-875a-f22ea82a7112', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
                ('462b71bc-cd27-457d-918e-b4c092dd0fbc', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
                ('1c2dc42d-011a-4bd7-97a9-6a9b2f769b94', 'a2faeae0-1441-4a18-9bab-88f79b356eac');
        `;
        await this.connection.query(statement, []);
    }

    async down (): Promise<void> {
        const statement = `
            DROP TABLE IF EXISTS "shopping_user" CASCADE;
        `;
        await this.connection.query(statement, []);
    }
}
