import { DatabaseMigration } from "../migration";
import { DatabaseConnection } from "../../database";

export class CreateStoreTable implements DatabaseMigration {

    constructor (private connection: DatabaseConnection) {}

    async up (): Promise<void> {
        const statement = `
            DROP TABLE IF EXISTS "store" CASCADE;

            CREATE TABLE IF NOT EXISTS "store" (
                "id" UUID NOT NULL,
                "code" TEXT NOT NULL UNIQUE,
                "name" TEXT NOT NULL,
                "email" TEXT NOT NULL,
                "phone" TEXT NOT NULL,
                PRIMARY KEY ("id")
            );
            
            INSERT INTO "store" 
                ("id", "code", "name", "email", "phone")
            VALUES
                ('b3edf713-bffe-4f4a-97eb-7c71e63e4091', '10001', 'Lojas Marisa', 'contato@marisa.com', '(84) 9400-3566'),
                ('ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38', '10002', 'Burger King', 'contato@burgerking.com', '(11) 2621-4810'),
                ('a321237a-d7fe-44be-b4f8-818f87cf7afc', '10003', 'Pizza Hut', 'contato@pizzahut.com', '(47) 7142-4825'),
                ('548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8', '10004', 'Spirito Santo', 'contato@spiritosanto.com', '(49) 3751-6989'),
                ('ec19ab4c-5229-4412-9dcc-37f2eb4eaf01', '10005', 'Panvel', 'contato@panvel.com', '(12) 5248-8179'),
                ('215b9b53-3a62-4aaa-8e3a-45b627682918', '10006', 'Bella Gula', 'contato@bellagula.com', '(71) 7762-3906'),
                ('28f15310-b087-4a25-98bf-06ae0e0abdeb', '10007', 'Beagle', 'contato@beagle.com', '(71) 5273-9374'),
                ('a8e69555-5eda-4832-aad5-a67f947dbe01', '10008', 'Vivo', 'contato@vivo.com', '(14) 2144-6730'),
                ('22464818-339e-49f3-b439-16838f7f2904', '10009', 'Chillibeans', 'contato@chillibeans.com', '(11) 8166-5876'),
                ('bc5fdb6b-7d8d-4b4f-876b-73c39348cc7e', '10010', 'Cinemark', 'contato@cinemark.com', '(75) 3770-4305'),
                ('56d45876-5564-4f22-aaf2-da5994b1b330', '10011', 'Paquetá Esportes', 'contato@paquetaesportes.com', '(18) 4261-9288'),
                ('6fc73524-860d-4478-9681-797217c6cc6c', '10012', 'Lojas Renner', 'contato@lojasrenner.com', '(48) 3426-7493'),
                ('e1cc04ba-eb68-46da-aaac-b5d442e190d1', '10013', 'Belshop', 'contato@belshop.com', '(11) 2758-2848');
        `;
        await this.connection.query(statement, []);
    }

    async down (): Promise<void> {
        const statement = `
            DROP TABLE IF EXISTS "store" CASCADE;
        `;
        await this.connection.query(statement, []);
    }
}
