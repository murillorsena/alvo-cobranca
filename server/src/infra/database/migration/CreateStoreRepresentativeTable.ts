import { DatabaseMigration } from "../migration";
import { DatabaseConnection } from "../../database";

export class CreateStoreRepresentativeTable implements DatabaseMigration {

    constructor (private connection: DatabaseConnection) {}

    async up (): Promise<void> {
        const statement = `
            DROP TABLE IF EXISTS "store_representative" CASCADE;

            CREATE TABLE "store_representative" (
                "store_id" UUID NOT NULL,
                "representative_id" UUID NOT NULL
            );

            INSERT INTO "store_representative"
                ("store_id", "representative_id")
            VALUES
                ('9d0b1637-51f5-4d96-9f46-04bf783a5113', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091'),
                ('c5730bb2-1b36-4895-b77d-f9d7a68ef239', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091'),
                ('958d962f-fe5a-4ce9-8ff2-1bd97e2b24a8', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091'),
                ('b649f543-d951-44b5-9a99-61eb4f1e6480', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091'),
                ('611bbc3c-3e3d-4a17-b03c-1b95e71c91d1', 'ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38'),
                ('b0a6244f-36a2-411c-a840-8ee7ca586843', 'ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38'),
                ('ec5f6f01-c622-4aea-9fcd-36d2431e7edd', 'a321237a-d7fe-44be-b4f8-818f87cf7afc'),
                ('5ac2d21d-007d-4842-a46b-7a542fb24a73', 'a321237a-d7fe-44be-b4f8-818f87cf7afc'),
                ('ea80a4fa-6243-4933-abac-fe8155a21972', 'a321237a-d7fe-44be-b4f8-818f87cf7afc'),
                ('87fbdf01-3857-4bc0-9314-2cd2a3e5cc59', '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8'),
                ('f500d265-7a59-46ee-8e2e-8def2488bb32', '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8'),
                ('db094731-c91c-4042-a947-f9c886f2959e', '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8'),
                ('582de66b-c3ec-4df8-a872-2b98b9a5eb8e', '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8'),
                ('2de5142a-5b05-4570-82b6-7d84a66b66ce', '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8'),
                ('eae8e7e1-cd1a-4483-821b-05f287555901', 'ec19ab4c-5229-4412-9dcc-37f2eb4eaf01'),
                ('bd71ad19-ccfa-4f16-b727-897597c27a44', 'ec19ab4c-5229-4412-9dcc-37f2eb4eaf01'),
                ('10b4fd65-0f19-4c17-a189-234c74968d0a', 'ec19ab4c-5229-4412-9dcc-37f2eb4eaf01'),
                ('65615ef9-0d54-4da2-8b1f-e30360b95562', '215b9b53-3a62-4aaa-8e3a-45b627682918'),
                ('ac02163e-dea3-4673-b8ce-17c9b1dea36f', '215b9b53-3a62-4aaa-8e3a-45b627682918'),
                ('c95a30a1-6add-4a1c-b453-e22bdb8881e7', '215b9b53-3a62-4aaa-8e3a-45b627682918'),
                ('fb0f01a4-1bcd-4fc2-99a7-cbb1fdb2a1b0', '215b9b53-3a62-4aaa-8e3a-45b627682918'),
                ('99ab0b81-c98a-4080-be0f-d73cf10fa24e', '28f15310-b087-4a25-98bf-06ae0e0abdeb'),
                ('c49d75da-aa84-4aff-8b0b-60d52d4afa8f', '28f15310-b087-4a25-98bf-06ae0e0abdeb'),
                ('88fed36b-f78c-415e-8a36-059946829561', 'a8e69555-5eda-4832-aad5-a67f947dbe01'),
                ('a30cbbc0-b57f-428d-a56d-2b8cfa915eab', 'a8e69555-5eda-4832-aad5-a67f947dbe01'),
                ('1f2354a8-8abd-47c8-92ba-78a61944ea51', 'a8e69555-5eda-4832-aad5-a67f947dbe01'),
                ('7286934d-6242-45c5-8c81-80ade413d08e', '22464818-339e-49f3-b439-16838f7f2904'),
                ('804d3751-9ff0-4d62-a896-2441a1f05cce', '22464818-339e-49f3-b439-16838f7f2904'),
                ('38231668-fbe0-45da-afa5-e926d04787ce', 'bc5fdb6b-7d8d-4b4f-876b-73c39348cc7e'),
                ('a36cdbf7-c3c1-4bd0-8674-8fb703e37dbc', 'bc5fdb6b-7d8d-4b4f-876b-73c39348cc7e'),
                ('da314d74-d5c0-4ccf-8ff7-92b7e287b0ed', 'bc5fdb6b-7d8d-4b4f-876b-73c39348cc7e'),
                ('cd50c5c8-e05d-4090-a4c7-d7e35fde8db4', 'bc5fdb6b-7d8d-4b4f-876b-73c39348cc7e'),
                ('26e55f0b-c52d-45be-b24b-476dc47338ec', '56d45876-5564-4f22-aaf2-da5994b1b330'),
                ('d5c5c38c-e3bb-4257-96d0-e1fe2245fa1e', '56d45876-5564-4f22-aaf2-da5994b1b330'),
                ('410b79dc-c597-49b1-b350-79c8ffd42ea0', '56d45876-5564-4f22-aaf2-da5994b1b330'),
                ('b01a61c9-66f9-4460-b82e-eef96939d1a7', '6fc73524-860d-4478-9681-797217c6cc6c'),
                ('1c7bc6da-c105-4985-b5d7-e4d1819f2c9e', '6fc73524-860d-4478-9681-797217c6cc6c'),
                ('3b942b4b-d29c-47ea-af6c-5fca558e2dc9', 'e1cc04ba-eb68-46da-aaac-b5d442e190d1'),
                ('fe69a864-6207-488f-bdc9-68c9e2ba2fe5', 'e1cc04ba-eb68-46da-aaac-b5d442e190d1');
        `;
        await this.connection.query(statement, []);
    }

    async down (): Promise<void> {
        const statement = `
            DROP TABLE IF EXISTS "store_representative" CASCADE;
        `;
        await this.connection.query(statement, []);
    }
}
