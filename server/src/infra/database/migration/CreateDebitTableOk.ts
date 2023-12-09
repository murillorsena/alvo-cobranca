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
                "store_id" UUID NOT NULL,
                "shopping_id" UUID NOT NULL,
                "user_id" UUID NOT NULL,
                PRIMARY KEY ("id")
            );
            
            INSERT INTO "debit" 
                ("id", "description", "amount", "due_date", "store_id", "shopping_id", "user_id")
            VALUES
                ('505604d1-534a-4895-b862-d7cc6acb7528', 'Aluguel Mínimo', '66608.54', '2022-07-10', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
                ('02b70188-4610-48d4-90e5-79872d0f0d62', 'Desconto Aluguel Mínimo', '-19982.56', '2022-07-10', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
                ('cc364718-ee51-45db-8c6f-d6d405c8e0f8', 'Encargos Condominiais', '27604.30', '2022-07-10', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
                ('73cbec28-97f0-4134-b60c-f7494a4bc75a', 'Encargos Condominiais', '26592.23', '2022-07-10', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
                ('a1a15af5-df01-40e4-8e98-8087d798f0b7', 'Fundo de Promoção', '1902.84', '2022-07-10', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
                ('7686a7f4-4b8d-4b6e-bf98-4a0180df83a6', 'Aluguel Mínimo', '13030.51', '2022-07-05', 'ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38', 'caadb02c-ff70-4073-89aa-b406b633d68d', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
                ('f16e12b1-14dd-44fe-883c-ee558d91138a', 'Desconto Aluguel Mínimo', '-2328.55', '2022-07-05', 'ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38', 'caadb02c-ff70-4073-89aa-b406b633d68d', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
                ('1a1f3bd3-4d37-4a4e-9d2b-c0e94eb74a51', 'Encargos Condominiais', '24953.32', '2022-07-05', 'ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38', 'caadb02c-ff70-4073-89aa-b406b633d68d', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
                ('0e318411-ebfa-4ae7-8180-b792a63f5ab5', 'Aluguel Mínimo', '138872.67', '2022-07-05', 'ec19ab4c-5229-4412-9dcc-37f2eb4eaf01', '6a021ef2-ebca-4d3e-a8e1-443b5261cf22', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
                ('c2089536-6398-4647-9d06-f05610d661ee', 'Desconto Aluguel Mínimo', '-28635.54', '2022-07-05', 'ec19ab4c-5229-4412-9dcc-37f2eb4eaf01', '6a021ef2-ebca-4d3e-a8e1-443b5261cf22', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
                ('a814b501-eca7-4bb3-a01f-6972b81fb198', 'Encargos Condominiais', '29107.98', '2022-07-05', 'ec19ab4c-5229-4412-9dcc-37f2eb4eaf01', '6a021ef2-ebca-4d3e-a8e1-443b5261cf22', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
                ('4bd5839f-31e9-47dc-ac76-94d6c2a09eac', 'Encargos Condominiais', '23608.35', '2022-07-05', 'ec19ab4c-5229-4412-9dcc-37f2eb4eaf01', '6a021ef2-ebca-4d3e-a8e1-443b5261cf22', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),                
                ('90bc8667-b511-41e3-b678-67f43d3218eb', 'Aluguel Mínimo', '41993.00', '2022-07-05', 'a8e69555-5eda-4832-aad5-a67f947dbe01', '11e4e51c-dc76-4454-8c6a-4e4f8a14b806', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
                ('f4e82f0e-f4d2-4925-972f-733c6cb86bcc', 'Encargos Condominiais', '16994.86', '2022-07-10', 'a8e69555-5eda-4832-aad5-a67f947dbe01', '11e4e51c-dc76-4454-8c6a-4e4f8a14b806', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
                ('f01771a4-a65f-4d1e-b1fe-4f93ef052295', 'Fundo de Promoção', '8398.60', '2022-07-10', 'a8e69555-5eda-4832-aad5-a67f947dbe01', '11e4e51c-dc76-4454-8c6a-4e4f8a14b806', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
                ('3ea9a8de-5573-4aa9-901f-f040462fa1a1', 'Aluguel Mínimo', '10289.77', '2022-06-05', '22464818-339e-49f3-b439-16838f7f2904', '2475a51e-f0f8-4239-a32b-819be34ecd63', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
                ('7cee582b-118f-49e0-b724-9597e23e4f81', 'Desconto Aluguel Mínimo', '-3601.42', '2022-06-05', '22464818-339e-49f3-b439-16838f7f2904', '2475a51e-f0f8-4239-a32b-819be34ecd63', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
                ('ff4c0ef1-0096-4cb8-9f15-b9ff8c3bf1e9', 'Aluguel Mínimo', '10289.77', '2022-07-05', '22464818-339e-49f3-b439-16838f7f2904', '2475a51e-f0f8-4239-a32b-819be34ecd63', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
                ('cbcd9420-9b6e-4644-bc86-0d86585b6332', 'Desconto Aluguel Mínimo', '-3601.42', '2022-07-05', '22464818-339e-49f3-b439-16838f7f2904', '2475a51e-f0f8-4239-a32b-819be34ecd63', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
                ('858e4696-649f-4701-99dd-211786c7c3ba', 'Encargos Condominiais', '2405.35', '2022-07-05', '22464818-339e-49f3-b439-16838f7f2904', '2475a51e-f0f8-4239-a32b-819be34ecd63', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
                ('9c7ef0d4-2d44-44d8-8721-9ee6e6deb76c', 'Fundo de Promoção', '2057.95', '2022-07-05', '22464818-339e-49f3-b439-16838f7f2904', '2475a51e-f0f8-4239-a32b-819be34ecd63', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
                ('cc1fc68d-5aa5-4da6-9fa3-606505e73abb', 'Aluguel Mínimo', '52087.34', '2022-07-05', '56d45876-5564-4f22-aaf2-da5994b1b330', '462b71bc-cd27-457d-918e-b4c092dd0fbc', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
                ('f0518642-dea8-4ced-872a-5c1afd432a82', 'Desconto Aluguel Mínimo', '-42218.87', '2022-07-05', '56d45876-5564-4f22-aaf2-da5994b1b330', '462b71bc-cd27-457d-918e-b4c092dd0fbc', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
                ('143f92e7-d957-41c7-958c-1f3d72f08f28', 'Encargos Condominiais', '42092.26', '2022-07-05', '56d45876-5564-4f22-aaf2-da5994b1b330', '462b71bc-cd27-457d-918e-b4c092dd0fbc', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
                ('aab1d437-2301-47df-a4c9-cee96a8fb2bf', 'Fundo de Promoção', '1622.18', '2022-07-10', '56d45876-5564-4f22-aaf2-da5994b1b330', '462b71bc-cd27-457d-918e-b4c092dd0fbc', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
                ('47907ad1-72ab-43b3-a7fd-0f95dd366897', 'Desconto Fundo de Promoção', '-1297.74', '2022-07-20', '56d45876-5564-4f22-aaf2-da5994b1b330', '462b71bc-cd27-457d-918e-b4c092dd0fbc', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
                ('1c316699-d55c-4d12-a0c3-9b2a5136a1d3', 'Nota Promissória de Aluguel', '2379.31', '2022-08-20', '56d45876-5564-4f22-aaf2-da5994b1b330', '462b71bc-cd27-457d-918e-b4c092dd0fbc', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
                ('f6af15ed-45a2-4c05-bdbd-c88d5a66c889', 'Nota Promissória de Aluguel', '2379.31', '2022-09-20', '56d45876-5564-4f22-aaf2-da5994b1b330', '462b71bc-cd27-457d-918e-b4c092dd0fbc', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
                ('9e7ed8af-bb97-4ef1-9646-d8a05ca9acd4', 'Nota Promissória de Aluguel', '2379.31', '2022-10-20', '56d45876-5564-4f22-aaf2-da5994b1b330', '462b71bc-cd27-457d-918e-b4c092dd0fbc', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
                ('febef2b3-806b-4aa2-affb-cfcf9cfede97', 'Nota Promissória de Aluguel', '2379.31', '2022-11-20', '56d45876-5564-4f22-aaf2-da5994b1b330', '462b71bc-cd27-457d-918e-b4c092dd0fbc', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
                ('8b07cd08-ce03-44af-9eaf-6f37cb52331d', 'Nota Promissória de Aluguel', '2379.31', '2022-12-20', '56d45876-5564-4f22-aaf2-da5994b1b330', '462b71bc-cd27-457d-918e-b4c092dd0fbc', 'a2faeae0-1441-4a18-9bab-88f79b356eac');
        `;
        // const statement = `
        //     DROP TABLE IF EXISTS "debit" CASCADE;

        //     CREATE TABLE IF NOT EXISTS "debit" (
        //         "id" UUID NOT NULL,
        //         "description" TEXT NOT NULL,
        //         "amount" NUMERIC NOT NULL,
        //         "due_date" DATE NOT NULL,
        //         "store_id" UUID NOT NULL,
        //         "shopping_id" UUID NOT NULL,
        //         "user_id" UUID NOT NULL,
        //         PRIMARY KEY ("id")
        //     );
            
        //     INSERT INTO "debit" 
        //         ("id", "description", "amount", "due_date", "store_id", "shopping_id", "user_id")
        //     VALUES
        //         ('b3edf713-bffe-4f4a-97eb-7c71e63e4091', '10001', 'Lojas Marisa', 'contato@marisacom', '(51) 98765-4321'),
        //         ('505604d1-534a-4895-b862-d7cc6acb7528', 'Aluguel Mínimo', '66.608,54', '2022-07-10', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
        //         ('02b70188-4610-48d4-90e5-79872d0f0d62', 'Desconto Aluguel Mínimo', '-19.982,56', '2022-07-10', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
        //         ('cc364718-ee51-45db-8c6f-d6d405c8e0f8', 'Encargos Condominiais', '27.604,30', '2022-07-10', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
        //         ('73cbec28-97f0-4134-b60c-f7494a4bc75a', 'Encargos Condominiais', '26.592.23', '2022-07-10', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
        //         ('a1a15af5-df01-40e4-8e98-8087d798f0b7', 'Fundo de Promoção', '1.902,84', '2022-07-10', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091', '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),

        //         ('ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38', '10002', 'Burger King', 'contato@burgerking.com', '(51) 98765-4321'),
        //         ('7686a7f4-4b8d-4b6e-bf98-4a0180df83a6', 'Aluguel Mínimo', '13.030,51', '2022-07-05', 'ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38', 'caadb02c-ff70-4073-89aa-b406b633d68d', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
        //         ('f16e12b1-14dd-44fe-883c-ee558d91138a', 'Desconto Aluguel Mínimo', '-2.328,55', '2022-07-05', 'ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38', 'caadb02c-ff70-4073-89aa-b406b633d68d', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
        //         ('1a1f3bd3-4d37-4a4e-9d2b-c0e94eb74a51', 'Encargos Condominiais', '24.953,32', '2022-07-05', 'ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38', 'caadb02c-ff70-4073-89aa-b406b633d68d', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
                
        //         ('', 'Fundo de Promoção', '558,45', '2022-07-05'),
        //         ('', 'a321237a-d7fe-44be-b4f8-818f87cf7afc', '10003', 'Pizza Hut', 'contato@pizzahut.com', '(51) 98765-4321'),
        //         ('', '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8', '10004', 'Spirito Santo', 'contato@spiritosanto.com', '(51) 98765-4321'),
                
        //         ('', 'ec19ab4c-5229-4412-9dcc-37f2eb4eaf01', '10005', 'Panvel', 'contato@panvel.com', '(51) 98765-4321'),
        //         ('0e318411-ebfa-4ae7-8180-b792a63f5ab5', 'Aluguel Mínimo', '138.872,67', '2022-07-05', 'ec19ab4c-5229-4412-9dcc-37f2eb4eaf01', '6a021ef2-ebca-4d3e-a8e1-443b5261cf22', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
        //         ('c2089536-6398-4647-9d06-f05610d661ee', 'Desconto Aluguel Mínimo', '-28.635,54', '2022-07-05', 'ec19ab4c-5229-4412-9dcc-37f2eb4eaf01', '6a021ef2-ebca-4d3e-a8e1-443b5261cf22', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
        //         ('a814b501-eca7-4bb3-a01f-6972b81fb198', 'Encargos Condominiais', '29.107,98', '2022-07-05', 'ec19ab4c-5229-4412-9dcc-37f2eb4eaf01', '6a021ef2-ebca-4d3e-a8e1-443b5261cf22', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
        //         ('4bd5839f-31e9-47dc-ac76-94d6c2a09eac', 'Encargos Condominiais', '23.608,35', '2022-07-05', 'ec19ab4c-5229-4412-9dcc-37f2eb4eaf01', '6a021ef2-ebca-4d3e-a8e1-443b5261cf22', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
                
        //         ('', 'Desconto Fundo de Promoção', '-4.868,04', '2022-07-05'),
        //         ('', '215b9b53-3a62-4aaa-8e3a-45b627682918', '10006', 'Bella Gula', 'contato@bellagula.com', '(51) 98765-4321', '037cdc11-d767-4a8a-b15e-5eba194b3904', 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'),
        //         ('', '28f15310-b087-4a25-98bf-06ae0e0abdeb', '10007', 'Beagle', 'contato@beagle.com', '(51) 98765-4321', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
                
        //         ('', 'a8e69555-5eda-4832-aad5-a67f947dbe01', '10008', 'Vivo', 'contato@vivo.com', '(51) 98765-4321'),
        //         ('90bc8667-b511-41e3-b678-67f43d3218eb', 'Aluguel Mínimo', '41.993,00', '2022-07-05', 'a8e69555-5eda-4832-aad5-a67f947dbe01', '11e4e51c-dc76-4454-8c6a-4e4f8a14b806', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
        //         ('f4e82f0e-f4d2-4925-972f-733c6cb86bcc', 'Encargos Condominiais', '16.994,86', '2022-07-10', 'a8e69555-5eda-4832-aad5-a67f947dbe01', '11e4e51c-dc76-4454-8c6a-4e4f8a14b806', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
        //         ('f01771a4-a65f-4d1e-b1fe-4f93ef052295', 'Fundo de Promoção', '8.398,60', '2022-07-10', 'a8e69555-5eda-4832-aad5-a67f947dbe01', '11e4e51c-dc76-4454-8c6a-4e4f8a14b806', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
                
        //         ('', '22464818-339e-49f3-b439-16838f7f2904', '10009', 'Chillibeans', 'contato@chillibeans.com', '(51) 98765-4321'),
        //         ('3ea9a8de-5573-4aa9-901f-f040462fa1a1', 'Aluguel Mínimo', '10.289,77', '2022-06-05', '22464818-339e-49f3-b439-16838f7f2904', '2475a51e-f0f8-4239-a32b-819be34ecd63', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
        //         ('7cee582b-118f-49e0-b724-9597e23e4f81', 'Desconto Aluguel Mínimo', '-3.601,42', '2022-06-05', '22464818-339e-49f3-b439-16838f7f2904', '2475a51e-f0f8-4239-a32b-819be34ecd63', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
        //         ('ff4c0ef1-0096-4cb8-9f15-b9ff8c3bf1e9', 'Aluguel Mínimo', '10.289,77', '2022-07-05', '22464818-339e-49f3-b439-16838f7f2904', '2475a51e-f0f8-4239-a32b-819be34ecd63', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
        //         ('cbcd9420-9b6e-4644-bc86-0d86585b6332', 'Desconto Aluguel Mínimo', '-3.601,42', '2022-07-05', '22464818-339e-49f3-b439-16838f7f2904', '2475a51e-f0f8-4239-a32b-819be34ecd63', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
        //         ('858e4696-649f-4701-99dd-211786c7c3ba', 'Encargos Condominiais', '2.405,35', '2022-07-05', '22464818-339e-49f3-b439-16838f7f2904', '2475a51e-f0f8-4239-a32b-819be34ecd63', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
        //         ('9c7ef0d4-2d44-44d8-8721-9ee6e6deb76c', 'Fundo de Promoção', '2.057,95', '2022-07-05', '22464818-339e-49f3-b439-16838f7f2904', '2475a51e-f0f8-4239-a32b-819be34ecd63', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
                
        //         ('', 'bc5fdb6b-7d8d-4b4f-876b-73c39348cc7e', '10010', 'Cinemark', 'contato@cinemark.com', '(51) 98765-4321'),
        //         ('', 'Encargos Condominiais', '20.210,88', '2022-07-05'),
                
        //         ('', '56d45876-5564-4f22-aaf2-da5994b1b330', '10011', 'Paquetá Esportes', 'contato@paquetaesportes.com', '(51) 98765-4321', '462b71bc-cd27-457d-918e-b4c092dd0fbc', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
        //         ('cc1fc68d-5aa5-4da6-9fa3-606505e73abb', 'Aluguel Mínimo', '52087.34', '2022-07-05', '56d45876-5564-4f22-aaf2-da5994b1b330', '462b71bc-cd27-457d-918e-b4c092dd0fbc', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
        //         ('f0518642-dea8-4ced-872a-5c1afd432a82', 'Desconto Aluguel Mínimo', '-42218.87', '2022-07-05', '56d45876-5564-4f22-aaf2-da5994b1b330', '462b71bc-cd27-457d-918e-b4c092dd0fbc', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
        //         ('143f92e7-d957-41c7-958c-1f3d72f08f28', 'Encargos Condominiais', '42092.26', '2022-07-05', '56d45876-5564-4f22-aaf2-da5994b1b330', '462b71bc-cd27-457d-918e-b4c092dd0fbc', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
        //         ('aab1d437-2301-47df-a4c9-cee96a8fb2bf', 'Fundo de Promoção', '1622.18', '2022-07-10', '56d45876-5564-4f22-aaf2-da5994b1b330', '462b71bc-cd27-457d-918e-b4c092dd0fbc', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
        //         ('47907ad1-72ab-43b3-a7fd-0f95dd366897', 'Desconto Fundo de Promoção', '-1297.74', '2022-07-20', '56d45876-5564-4f22-aaf2-da5994b1b330', '462b71bc-cd27-457d-918e-b4c092dd0fbc', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
        //         ('1c316699-d55c-4d12-a0c3-9b2a5136a1d3', 'Nota Promissória de Aluguel', '2379.31', '2022-08-20', '56d45876-5564-4f22-aaf2-da5994b1b330', '462b71bc-cd27-457d-918e-b4c092dd0fbc', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
        //         ('f6af15ed-45a2-4c05-bdbd-c88d5a66c889', 'Nota Promissória de Aluguel', '2379.31', '2022-09-20', '56d45876-5564-4f22-aaf2-da5994b1b330', '462b71bc-cd27-457d-918e-b4c092dd0fbc', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
        //         ('9e7ed8af-bb97-4ef1-9646-d8a05ca9acd4', 'Nota Promissória de Aluguel', '2379.31', '2022-10-20', '56d45876-5564-4f22-aaf2-da5994b1b330', '462b71bc-cd27-457d-918e-b4c092dd0fbc', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
        //         ('febef2b3-806b-4aa2-affb-cfcf9cfede97', 'Nota Promissória de Aluguel', '2379.31', '2022-11-20', '56d45876-5564-4f22-aaf2-da5994b1b330', '462b71bc-cd27-457d-918e-b4c092dd0fbc', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
        //         ('8b07cd08-ce03-44af-9eaf-6f37cb52331d', 'Nota Promissória de Aluguel', '2379.31', '2022-12-20', '56d45876-5564-4f22-aaf2-da5994b1b330', '462b71bc-cd27-457d-918e-b4c092dd0fbc', 'a2faeae0-1441-4a18-9bab-88f79b356eac'),
                
        //         ('', '6fc73524-860d-4478-9681-797217c6cc6c', '10012', 'Lojas Renner', 'contato@lojasrenner.com', '(51) 98765-4321'),
        //         ('', 'e1cc04ba-eb68-46da-aaac-b5d442e190d1', '10013', 'Belshop', 'contato@belshop.com', '(51) 98765-4321');

                
        //         '', '', ''
        //         '', '', ''
        //         '', '', ''
        //         '', '', ''
        //         '', '', ''


                
        //         ('a321237a-d7fe-44be-b4f8-818f87cf7afc', '10003', 'LOJA 03', 'loja03@mail.com', '(51) 98765-4321'),
        //         ('548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8', '10004', 'LOJA 04', 'loja04@mail.com', '(51) 98765-4321'),
                
        //         ('215b9b53-3a62-4aaa-8e3a-45b627682918', '10006', 'LOJA 06', 'loja06@mail.com', '(51) 98765-4321'),
        //         ('28f15310-b087-4a25-98bf-06ae0e0abdeb', '10007', 'LOJA 07', 'loja07@mail.com', '(51) 98765-4321'),
        //         ('a8e69555-5eda-4832-aad5-a67f947dbe01', '10008', 'LOJA 08', 'loja08@mail.com', '(51) 98765-4321'),
        //         ('22464818-339e-49f3-b439-16838f7f2904', '10009', 'LOJA 09', 'loja09@mail.com', '(51) 98765-4321'),
        //         ('bc5fdb6b-7d8d-4b4f-876b-73c39348cc7e', '10010', 'LOJA 10', 'loja10@mail.com', '(51) 98765-4321'),
        //         ('56d45876-5564-4f22-aaf2-da5994b1b330', '10011', 'LOJA 11', 'loja11@mail.com', '(51) 98765-4321'),
        //         ('6fc73524-860d-4478-9681-797217c6cc6c', '10012', 'LOJA 12', 'loja12@mail.com', '(51) 98765-4321'),
        //         ('e1cc04ba-eb68-46da-aaac-b5d442e190d1', '10013', 'LOJA 13', 'loja13@mail.com', '(51) 98765-4321');
        // `;
        await this.connection.query(statement, []);
    }

    async down (): Promise<void> {
        const statement = `
            DROP TABLE IF EXISTS "debit" CASCADE;
        `;
        await this.connection.query(statement, []);
    }
}
