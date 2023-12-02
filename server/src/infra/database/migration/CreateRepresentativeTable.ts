import { DatabaseMigration } from "../migration";
import { DatabaseConnection } from "../../database";

export class CreateRepresentativeTable implements DatabaseMigration {

    constructor (private connection: DatabaseConnection) {}

    async up (): Promise<void> {
        const statement = `
            DROP TABLE IF EXISTS "representative" CASCADE;

            CREATE TABLE IF NOT EXISTS "representative" (
                "id" UUID NOT NULL,
                "name" TEXT NOT NULL,
                "email" TEXT NOT NULL UNIQUE,
                "phone" TEXT NOT NULL,
                "address" TEXT NOT NULL,
                "role" TEXT NOT NULL,
                "store_id" UUID NOT NULL,
                PRIMARY KEY ("id")
            );
            
            INSERT INTO "representative"
                ("id", "name", "email", "phone", "address", "role", "store_id")
            VALUES
                ('9d0b1637-51f5-4d96-9f46-04bf783a5113', 'Erick Melo Cunha', 'erickcunha@mail.com', '(47) 9972-8236', 'Rua Alois Finder, 1511', 'Representante Legal', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091'),
                ('c5730bb2-1b36-4895-b77d-f9d7a68ef239', 'Sarah Souza Sousa', 'sarahsousa@mail.com', '(31) 6628-7573', 'Praça Marcelo Alves Cordeiro, 383', 'Fiador', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091'),
                ('958d962f-fe5a-4ce9-8ff2-1bd97e2b24a8', 'Marcos Gomes Carvalho', 'marcoscarvalho@mail.com', '(71) 5867-3864', 'Travessa Baixa dos Frades, 165', 'Fiador', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091'),
                ('b649f543-d951-44b5-9a99-61eb4f1e6480', 'Mateus Pereira Sousa', 'mateuspereira@mail.com', '(34) 8457-2302', 'Rua Águas do Araxá, 1457', 'Fiador', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091'),
                ('611bbc3c-3e3d-4a17-b03c-1b95e71c91d1', 'Lara Souza Costa', 'laracosta@mail.com', '(12) 8437-8289', 'Alameda dos Lírios, 1908', 'Representante Legal', 'ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38'),
                ('b0a6244f-36a2-411c-a840-8ee7ca586843', 'Gabrielle Rocha Correia', 'gabriellecorreia@mail.com', '(41) 3096-7735', 'Rua Machado de Assis, 82', 'Fiador', 'ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38'),
                ('ec5f6f01-c622-4aea-9fcd-36d2431e7edd', 'José Alves Lima', 'joselima@mail.com', '(11) 7405-5587', 'Avenida Amador Bueno da Veiga, 1172', 'Representante Legal', 'a321237a-d7fe-44be-b4f8-818f87cf7afc'),
                ('5ac2d21d-007d-4842-a46b-7a542fb24a73', 'Isabelle Barbosa Pinto', 'isabellepinto@mail.com', '(11) 9432-5034', 'Rua José Benedito Oliveira, 1024', 'Fiador', 'a321237a-d7fe-44be-b4f8-818f87cf7afc'),
                ('ea80a4fa-6243-4933-abac-fe8155a21972', 'Lavinia Correia Costa', 'laviniaccosta@mail.com', '(11) 9381-8441', 'Rua José Manuel Nicoli, 607', 'Fiador', 'a321237a-d7fe-44be-b4f8-818f87cf7afc'),
                ('87fbdf01-3857-4bc0-9314-2cd2a3e5cc59', 'Ana Fernandes Cardoso', 'anafernandes@mail.com', '(31) 9024-2093', 'Rua Chico Xavier, 1636', 'Representante Legal', '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8'),
                ('f500d265-7a59-46ee-8e2e-8def2488bb32', 'Kai Goncalves Cavalcanti', 'kaigcavalcanti@mail.com', '(27) 3673-8537', 'Rua Luiz Vassalo, 789', 'Fiador', '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8'),
                ('db094731-c91c-4042-a947-f9c886f2959e', 'Ágatha Melo Rodrigues', 'agathamelor@mail.com', '(14) 4042-9142', 'Rua Piauí, 958', 'Fiador', '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8'),
                ('582de66b-c3ec-4df8-a872-2b98b9a5eb8e', 'Kauã Carvalho Martins', 'kauacmartins@mail.com', '(42) 4154-3659', 'Rua Frei Jacinto de Butiatuba, 1732', 'Fiador', '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8'),
                ('2de5142a-5b05-4570-82b6-7d84a66b66ce', 'Murilo Carvalho Fernandes', 'murilofernandes@mail.com', '(21) 9521-9675', 'Rua Yassuite Inove, 49', 'Fiador', '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8'),
                ('eae8e7e1-cd1a-4483-821b-05f287555901', 'Luiza Cavalcanti Costa', 'luizacosta@mail.com', '(27) 4899-4021', 'Rua das Camomilas, 1990', 'Representante Legal', 'ec19ab4c-5229-4412-9dcc-37f2eb4eaf01'),
                ('bd71ad19-ccfa-4f16-b727-897597c27a44', 'Ana Araujo Lima', 'analima@mail.com', '(24) 7513-5984', 'Rua Marcone, 1044', 'Representante Legal', 'ec19ab4c-5229-4412-9dcc-37f2eb4eaf01'),
                ('10b4fd65-0f19-4c17-a189-234c74968d0a', 'André Barros Costa', 'andrecosta@mail.com', '(11) 5259-5558', 'Rua Procópio de Oliveira, 486', 'Fiador', 'ec19ab4c-5229-4412-9dcc-37f2eb4eaf01'),
                ('65615ef9-0d54-4da2-8b1f-e30360b95562', 'Anna Dias Carvalho', 'annadiascarvalho@mail.com', '(37) 3792-7523', 'Conjunto Arembepe, 1707', 'Representante Legal', '215b9b53-3a62-4aaa-8e3a-45b627682918'),
                ('ac02163e-dea3-4673-b8ce-17c9b1dea36f', 'Ana Costa Alves', 'anaalves@mail.com', '(51) 8913-9942', 'Rua Manoel Bandeira, 1881', 'Fiador', '215b9b53-3a62-4aaa-8e3a-45b627682918'),
                ('c95a30a1-6add-4a1c-b453-e22bdb8881e7', 'Pedro Alves Carvalho', 'pedroalves@mail.com', '(32) 5137-6865', 'Avenida Mississipi, 715', 'Fiador', '215b9b53-3a62-4aaa-8e3a-45b627682918'),
                ('fb0f01a4-1bcd-4fc2-99a7-cbb1fdb2a1b0', 'Enzo Pinto Alves', 'enzoalves@mail.com', '(11) 9873-9975', 'Rua Ecoporanga, 1990', 'Fiador', '215b9b53-3a62-4aaa-8e3a-45b627682918'),
                ('99ab0b81-c98a-4080-be0f-d73cf10fa24e', 'Julia Carvalho Araujo', 'juliaaraujo@mail.com', '(11) 8977-8947', 'Estrada do Alvarenga, 1493', 'Representante Legal', '28f15310-b087-4a25-98bf-06ae0e0abdeb'),
                ('c49d75da-aa84-4aff-8b0b-60d52d4afa8f', 'Lavinia Gomes Pinto', 'laviniagomes@mail.com', '(21) 4521-5744', 'Alameda Quero-queros, 1138', 'Fiador', '28f15310-b087-4a25-98bf-06ae0e0abdeb'),
                ('88fed36b-f78c-415e-8a36-059946829561', 'Kaua Silva Ribeiro', 'kauaribeiro@mail.com', '(87) 2665-7377', 'Avenida Joaquim Nabuco, 1774', 'Representante Legal', 'a8e69555-5eda-4832-aad5-a67f947dbe01'),
                ('a30cbbc0-b57f-428d-a56d-2b8cfa915eab', 'Cauã Dias Souza', 'cauasouza@mail.com', '(34) 3735-3716', 'Rua Geraldo José da Costa, 714', 'Fiador', 'a8e69555-5eda-4832-aad5-a67f947dbe01'),
                ('1f2354a8-8abd-47c8-92ba-78a61944ea51', 'Guilherme Gomes Oliveira', 'guilhermeoliveira@mail.com', '(79) 7398-2891', 'Rua Espírito Santo, 1037', 'Fiador', 'a8e69555-5eda-4832-aad5-a67f947dbe01'),
                ('7286934d-6242-45c5-8c81-80ade413d08e', 'Joao Pereira Martins', 'joaomartins@mail.com', '(71) 8154-2436', '1ª Travessa Carlos Gentil, 1308', 'Representante Legal', '22464818-339e-49f3-b439-16838f7f2904'),
                ('804d3751-9ff0-4d62-a896-2441a1f05cce', 'Sarah Goncalves Melo', 'sarahmelo@mail.com', '(22) 3969-2282', 'Rua Joana Dark, 575', 'Fiador', '22464818-339e-49f3-b439-16838f7f2904'),
                ('38231668-fbe0-45da-afa5-e926d04787ce', 'Leonor Almeida Araujo', 'leonoralmeida@mail.com', '(47) 7515-6852', 'Rua Sombrio, 1740', 'Representante Legal', 'bc5fdb6b-7d8d-4b4f-876b-73c39348cc7e'),
                ('a36cdbf7-c3c1-4bd0-8674-8fb703e37dbc', 'Miguel Pinto Silva', 'miguelsilva@mail.com', '(21) 6873-9819', 'Rua Mutambeira, 373', 'Representante Legal', 'bc5fdb6b-7d8d-4b4f-876b-73c39348cc7e'),
                ('da314d74-d5c0-4ccf-8ff7-92b7e287b0ed', 'Antônio Correia Araujo', 'antoniocorreia@mail.com', '(14) 2143-4589', 'Travessa Henrique Pavão, 206', 'Representante Legal', 'bc5fdb6b-7d8d-4b4f-876b-73c39348cc7e'),
                ('cd50c5c8-e05d-4090-a4c7-d7e35fde8db4', 'Kauã Souza Costa', 'kauacosta@mail.com', '(65) 5818-4485', 'Rua Cinco, 1550', 'Fiador', 'bc5fdb6b-7d8d-4b4f-876b-73c39348cc7e'),
                ('26e55f0b-c52d-45be-b24b-476dc47338ec', 'Gabrielly Silva Pereira', 'gabriellypereira@mail.com', '(71) 3872-9825', 'Travessa do Abacaxi, 1676', 'Representante Legal', '56d45876-5564-4f22-aaf2-da5994b1b330'),
                ('d5c5c38c-e3bb-4257-96d0-e1fe2245fa1e', 'Letícia Barros Lima', 'leticiabarros@mail.com', '(62) 6325-4108', 'Viela 24, 1509', 'Fiador', '56d45876-5564-4f22-aaf2-da5994b1b330'),
                ('410b79dc-c597-49b1-b350-79c8ffd42ea0', 'Diogo Almeida Barros', 'diogobarros@mail.com', '(31) 2318-6114', 'Rua Ouro, 1540', 'Fiador', '56d45876-5564-4f22-aaf2-da5994b1b330'),
                ('b01a61c9-66f9-4460-b82e-eef96939d1a7', 'Vinícius Rodrigues Barbosa', 'viniciusbarbosa@mail.com', '(11) 8290-2566', 'Rua Brazeliza Alves Carvalho, 882', 'Representante Legal', '6fc73524-860d-4478-9681-797217c6cc6c'),
                ('1c7bc6da-c105-4985-b5d7-e4d1819f2c9e', 'Emily Pereira Cardoso', 'emilycardoso@mail.com', '(64) 5519-9574', 'Avenida H, 709', 'Fiador', '6fc73524-860d-4478-9681-797217c6cc6c'),
                ('3b942b4b-d29c-47ea-af6c-5fca558e2dc9', 'Fábio Melo Gomes', 'fabiomelo@mail.com', '(31) 9578-8243', 'Rua Júlio Ferraz, 1653', 'Representante Legal', 'e1cc04ba-eb68-46da-aaac-b5d442e190d1'),
                ('fe69a864-6207-488f-bdc9-68c9e2ba2fe5', 'Joao Pinto Costa', 'joaopcosta@mail.com', '(22) 5671-7385', 'Rua Casimiro de Abreu, 1457', 'Fiador', 'e1cc04ba-eb68-46da-aaac-b5d442e190d1');
        `;
        await this.connection.query(statement, []);
    }

    async down (): Promise<void> {
        const statement = `
            DROP TABLE IF EXISTS "representative" CASCADE;
        `;
        await this.connection.query(statement, []);
    }
}
