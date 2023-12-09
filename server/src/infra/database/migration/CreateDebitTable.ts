import { DatabaseMigration } from "../migration";
import { DatabaseConnection } from "../../database";

export class CreateDebitTable implements DatabaseMigration {

    constructor (private connection: DatabaseConnection) {}

    async up (): Promise<void> {
        const statement = `
DROP TABLE IF EXISTS "debit" CASCADE;

CREATE TABLE IF NOT EXISTS "debit" (
    "id" UUID NOT NULL,
    "description" TEXT NOT NULL,
    "amount" NUMERIC NOT NULL,
    "due_date" DATE NOT NULL,
    "compensation_date" DATE,
    "store_id" UUID NOT NULL,
    "shopping_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    PRIMARY KEY ("id")
);

INSERT INTO "debit"
    ("id", "description", "amount", "due_date", "compensation_date", "store_id", "shopping_id", "user_id")
VALUES
    ('dd09bfc4-c0d6-44c2-a7e7-a691d43e4085', 'Aluguel Mínimo', '66608.54', '2023-11-05T00:00:00.000Z', '2023-11-06T00:00:00.000Z', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
    ('505604d1-534a-4895-b862-d7cc6acb7528', 'Aluguel Mínimo', '66608.54', '2023-12-05T00:00:00.000Z', null, 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
    ('02b70188-4610-48d4-90e5-79872d0f0d62', 'Desconto Aluguel Mínimo', '-19982.56', '2023-12-05T00:00:00.000Z', null, 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
    ('e641086e-14d4-4af1-9766-350672c8e7bb', 'Aluguel Adicional', '66608.54', '2023-12-05T00:00:00.000Z', null, 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
    ('cc364718-ee51-45db-8c6f-d6d405c8e0f8', 'Encargos Condominiais', '27604.30', '2023-12-10T00:00:00.000Z', null, 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
    ('a1a15af5-df01-40e4-8e98-8087d798f0b7', 'Fundo de Promoção', '1902.84', '2023-12-10T00:00:00.000Z', null, 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
    ('5f777c6f-9e5f-42d0-933e-49dfb4e95c8c', 'Aluguel Complementar', '9991.28', '2023-12-15T00:00:00.000Z', null, 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
    ('73cbec28-97f0-4134-b60c-f7494a4bc75a', 'Encargos Condominiais', '26592.23', '2024-01-10T00:00:00.000Z', null, 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
    
    ('7686a7f4-4b8d-4b6e-bf98-4a0180df83a6', 'Aluguel Mínimo', '13030.51', '2023-12-05T00:00:00.000Z', null, 'ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38', 'caadb02c-ff70-4073-89aa-b406b633d68d', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
    ('f16e12b1-14dd-44fe-883c-ee558d91138a', 'Desconto Aluguel Mínimo', '-2328.55', '2023-12-05T00:00:00.000Z', null, 'ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38', 'caadb02c-ff70-4073-89aa-b406b633d68d', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
    ('74300f09-2f0c-40d7-8c46-ee9cd4e88aeb', 'Aluguel Adicional', '13030.51', '2023-12-05T00:00:00.000Z', null, 'ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38', 'caadb02c-ff70-4073-89aa-b406b633d68d', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
    ('1a1f3bd3-4d37-4a4e-9d2b-c0e94eb74a51', 'Encargos Condominiais', '24953.32', '2023-12-10T00:00:00.000Z', null, 'ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38', 'caadb02c-ff70-4073-89aa-b406b633d68d', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
    
    ('6dfcd7ec-1b7f-4596-9727-3942bb8d4b99', '', '', '', null, 'a321237a-d7fe-44be-b4f8-818f87cf7afc', '0d986235-5e8c-434e-a290-5fa65878a7ec', ''),
    
    ('fcd3c058-6f82-450f-81f8-9f611da55b4a', 'Aluguel Mínimo', '26864.04', '2023-12-05T00:00:00.000Z', null, '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8', '4f8609f3-f45d-4d7d-a5fd-9f1fa46baaab', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
    ('7979fe9f-ba7a-46ef-8606-06902406d805', 'Desconto Aluguel Mínimo', '-5098.79', '2023-12-05T00:00:00.000Z', null, '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8', '4f8609f3-f45d-4d7d-a5fd-9f1fa46baaab', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
    ('2a3c247f-af5f-45be-a40a-ca63f075248c', 'Aluguel Adicional', '26864.04', '2023-12-05T00:00:00.000Z', null, '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8', '4f8609f3-f45d-4d7d-a5fd-9f1fa46baaab', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
    ('14ace684-b53e-4159-954c-ad0da08645ea', 'Encargos Condominiais', '12064.15', '2023-12-10T00:00:00.000Z', null, '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8', '4f8609f3-f45d-4d7d-a5fd-9f1fa46baaab', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
    ('448fbcb3-e2b5-4a4f-afa4-26c6022e0bc0', 'Fundo de Promoção', '5372.81', '2023-12-10T00:00:00.000Z', null, '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8', '4f8609f3-f45d-4d7d-a5fd-9f1fa46baaab', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
    ('9153ca2d-b1d8-493c-8127-6f72430f542d', 'Aluguel Complementar', '3264.79', '2023-12-15T00:00:00.000Z', null, '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8', '4f8609f3-f45d-4d7d-a5fd-9f1fa46baaab', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
    
    ('0e318411-ebfa-4ae7-8180-b792a63f5ab5', 'Aluguel Mínimo', '138872.67', '2023-12-05T00:00:00.000Z', null, 'ec19ab4c-5229-4412-9dcc-37f2eb4eaf01', '6a021ef2-ebca-4d3e-a8e1-443b5261cf22', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
    ('c2089536-6398-4647-9d06-f05610d661ee', 'Desconto Aluguel Mínimo', '-28635.54', '2023-12-05T00:00:00.000Z', null, 'ec19ab4c-5229-4412-9dcc-37f2eb4eaf01', '6a021ef2-ebca-4d3e-a8e1-443b5261cf22', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
    ('a814b501-eca7-4bb3-a01f-6972b81fb198', 'Encargos Condominiais', '29107.98', '2023-12-10T00:00:00.000Z', null, 'ec19ab4c-5229-4412-9dcc-37f2eb4eaf01', '6a021ef2-ebca-4d3e-a8e1-443b5261cf22', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
    ('4bd5839f-31e9-47dc-ac76-94d6c2a09eac', 'Encargos Condominiais', '23608.35', '2024-01-10T00:00:00.000Z', null, 'ec19ab4c-5229-4412-9dcc-37f2eb4eaf01', '6a021ef2-ebca-4d3e-a8e1-443b5261cf22', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),                

    ('b3e83c1d-0b96-491e-9758-fb1f4acb9444', '', '', '', null, '215b9b53-3a62-4aaa-8e3a-45b627682918', '037cdc11-d767-4a8a-b15e-5eba194b3904', ''),
    
    ('98444dd5-6e02-4ba9-bff6-76dac952df6d', '', '', '', null, '28f15310-b087-4a25-98bf-06ae0e0abdeb', 'f27d5dec-2b45-427e-96a7-859335c4c2ca', ''),
    
    ('90bc8667-b511-41e3-b678-67f43d3218eb', 'Aluguel Mínimo', '41993.00', '2023-12-05T00:00:00.000Z', null, 'a8e69555-5eda-4832-aad5-a67f947dbe01', '11e4e51c-dc76-4454-8c6a-4e4f8a14b806', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
    ('f4e82f0e-f4d2-4925-972f-733c6cb86bcc', 'Encargos Condominiais', '16994.86', '2023-12-10T00:00:00.000Z', null, 'a8e69555-5eda-4832-aad5-a67f947dbe01', '11e4e51c-dc76-4454-8c6a-4e4f8a14b806', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
    ('f01771a4-a65f-4d1e-b1fe-4f93ef052295', 'Fundo de Promoção', '8398.60', '2023-12-10T00:00:00.000Z', null, 'a8e69555-5eda-4832-aad5-a67f947dbe01', '11e4e51c-dc76-4454-8c6a-4e4f8a14b806', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
    
    ('1c316699-d55c-4d12-a0c3-9b2a5136a1d3', 'Nota Promissória de Aluguel', '2379.31', '2023-10-20T00:00:00.000Z', '2023-10-23T00:00:00.000Z', '22464818-339e-49f3-b439-16838f7f2904', '2475a51e-f0f8-4239-a32b-819be34ecd63', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
    ('f6af15ed-45a2-4c05-bdbd-c88d5a66c889', 'Nota Promissória de Aluguel', '2379.31', '2023-11-20T00:00:00.000Z', '2023-11-20T00:00:00.000Z', '22464818-339e-49f3-b439-16838f7f2904', '2475a51e-f0f8-4239-a32b-819be34ecd63', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
    ('3ea9a8de-5573-4aa9-901f-f040462fa1a1', 'Aluguel Mínimo', '10289.77', '2023-12-05T00:00:00.000Z', null, '22464818-339e-49f3-b439-16838f7f2904', '2475a51e-f0f8-4239-a32b-819be34ecd63', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
    ('7cee582b-118f-49e0-b724-9597e23e4f81', 'Desconto Aluguel Mínimo', '-3601.42', '2023-12-05T00:00:00.000Z', null, '22464818-339e-49f3-b439-16838f7f2904', '2475a51e-f0f8-4239-a32b-819be34ecd63', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
    ('858e4696-649f-4701-99dd-211786c7c3ba', 'Encargos Condominiais', '2405.35', '2023-12-10T00:00:00.000', null, '22464818-339e-49f3-b439-16838f7f2904', '2475a51e-f0f8-4239-a32b-819be34ecd63', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
    ('9c7ef0d4-2d44-44d8-8721-9ee6e6deb76c', 'Fundo de Promoção', '2057.95', '2023-12-05T00:00:00.000Z', null, '22464818-339e-49f3-b439-16838f7f2904', '2475a51e-f0f8-4239-a32b-819be34ecd63', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
    ('9e7ed8af-bb97-4ef1-9646-d8a05ca9acd4', 'Nota Promissória de Aluguel', '2379.31', '2023-12-20T00:00:00.000Z', null, '22464818-339e-49f3-b439-16838f7f2904', '2475a51e-f0f8-4239-a32b-819be34ecd63', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
    ('ff4c0ef1-0096-4cb8-9f15-b9ff8c3bf1e9', 'Aluguel Mínimo', '10289.77', '2024-01-05T00:00:00.000Z', null, '22464818-339e-49f3-b439-16838f7f2904', '2475a51e-f0f8-4239-a32b-819be34ecd63', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
    ('cbcd9420-9b6e-4644-bc86-0d86585b6332', 'Desconto Aluguel Mínimo', '-3601.42', '2024-01-05T00:00:00.000Z', null, '22464818-339e-49f3-b439-16838f7f2904', '2475a51e-f0f8-4239-a32b-819be34ecd63', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
    ('febef2b3-806b-4aa2-affb-cfcf9cfede97', 'Nota Promissória de Aluguel', '2379.31', '2024-01-20T00:00:00.000Z', null, '22464818-339e-49f3-b439-16838f7f2904', '2475a51e-f0f8-4239-a32b-819be34ecd63', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
    ('8b07cd08-ce03-44af-9eaf-6f37cb52331d', 'Nota Promissória de Aluguel', '2379.31', '2024-02-20T00:00:00.000Z', null, '22464818-339e-49f3-b439-16838f7f2904', '2475a51e-f0f8-4239-a32b-819be34ecd63', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),

    ('2c9e44e6-a9ff-4761-88dd-2069305e124f', '', '', '', null, 'bc5fdb6b-7d8d-4b4f-876b-73c39348cc7e', '7cf491b2-1cd5-4bd6-a2fa-8a32194ff1d4', ''),

    ('cc1fc68d-5aa5-4da6-9fa3-606505e73abb', 'Aluguel Mínimo', '52087.34', '2023-12-05T00:00:00.000Z', null, '56d45876-5564-4f22-aaf2-da5994b1b330', '462b71bc-cd27-457d-918e-b4c092dd0fbc', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
    ('f0518642-dea8-4ced-872a-5c1afd432a82', 'Desconto Aluguel Mínimo', '-42218.87', '2023-12-05T00:00:00.000Z', null, '56d45876-5564-4f22-aaf2-da5994b1b330', '462b71bc-cd27-457d-918e-b4c092dd0fbc', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
    ('143f92e7-d957-41c7-958c-1f3d72f08f28', 'Encargos Condominiais', '42092.26', '2023-12-10T00:00:00.000Z', null, '56d45876-5564-4f22-aaf2-da5994b1b330', '462b71bc-cd27-457d-918e-b4c092dd0fbc', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
    ('aab1d437-2301-47df-a4c9-cee96a8fb2bf', 'Fundo de Promoção', '1622.18', '2023-12-10T00:00:00.000Z', null, '56d45876-5564-4f22-aaf2-da5994b1b330', '462b71bc-cd27-457d-918e-b4c092dd0fbc', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
    ('47907ad1-72ab-43b3-a7fd-0f95dd366897', 'Desconto Fundo de Promoção', '-1297.74', '2023-12-10T00:00:00.000Z', null, '56d45876-5564-4f22-aaf2-da5994b1b330', '462b71bc-cd27-457d-918e-b4c092dd0fbc', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),

    ('996fa3f2-1109-4c84-a881-220f80232247', '', '', '', null, '6fc73524-860d-4478-9681-797217c6cc6c', '462b71bc-cd27-457d-918e-b4c092dd0fbc', ''),
    
    ('884dae8d-5401-4802-bf09-5edab8194efa', '', '', '', null, 'e1cc04ba-eb68-46da-aaac-b5d442e190d1', '1c2dc42d-011a-4bd7-97a9-6a9b2f769b94', ''),

    ('7a06c512-e8e3-445b-9711-a973457ca9eb', '', '', '', null, 'e1cc04ba-eb68-46da-aaac-b5d442e190d1', '1c2dc42d-011a-4bd7-97a9-6a9b2f769b94', '');
        `;
        await this.connection.query(statement, []);
    }

    async down (): Promise<void> {
        const statement = `
            DROP TABLE IF EXISTS "debit" CASCADE;
        `;
        await this.connection.query(statement, []);
    }
}
