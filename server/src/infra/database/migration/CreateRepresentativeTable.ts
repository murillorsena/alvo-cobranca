import { DatabaseMigration } from ".";
import { DatabaseConnection } from "..";

export class CreateRepresentativeTable implements DatabaseMigration {

    constructor (private connection: DatabaseConnection) {}

    async up (): Promise<void> {
        const statement = `
            DROP TABLE IF EXISTS "representative" CASCADE;

            CREATE TABLE IF NOT EXISTS "shopping" (
                "id" UUID NOT NULL,
                "name" TEXT NOT NULL,
                "email" TEXT NOT NULL UNIQUE,
                "phone" TEXT NOT NULL,
                "street_name" TEXT NOT NULL,
                "street_number" TEXT NOT NULL,
                "city" TEXT NOT NULL,
                "state" TEXT NOT NULL,
                "zip_code" TEXT NOT NULL,
                "country" TEXT NOT NULL,
                PRIMARY KEY ("id")
            );
            
            INSERT INTO "representative"
                ("id", "name", "email", "phone", "role", "street_name", "street_number", "city", "state", "zip_code", "country", "store_id")
            VALUES
                ('', 'Erick Melo Cunha', 'erickcunha@mail.com', '(47) 9972-8236', 'Representante Legal', 'Rua Alois Finder', '1511', 'Joinville', 'SC', '89225-620', 'Brasil', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091'),
                ('', 'Sarah Souza Sousa', 'sarahsousa@mail.com', '(31) 6628-7573', 'Fiador', 'Praça Marcelo Alves Cordeiro', '383', 'Timóteo', 'MG', '35180-422', 'Brasil', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091'),
                ('', 'Marcos Gomes Carvalho', 'marcoscarvalho@mail.com', '(71) 5867-3864', 'Fiador', 'Travessa Baixa dos Frades', '165', 'Salvador', 'BA', '40365-750', 'Brasil', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091'),
                ('', 'Mateus Pereira Sousa', 'mateuspereira@mail.com', '(34) 8457-2302', 'Fiador', 'Rua Águas do Araxá', '1457', 'Araxá', 'MG', '38184-518', 'Brasil', 'b3edf713-bffe-4f4a-97eb-7c71e63e4091'),
                
                ('', 'Lara Souza Costa', 'laracosta@mail.com', '(12) 8437-8289', 'Representante Legal', 'Alameda dos Lírios', '1908', 'Cruzeiro', 'SP', '12712-170', 'Brasil', 'ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38'),
                ('', 'Gabrielle Rocha Correia', 'gabriellecorreia@mail.com', '(41) 3096-7735', 'Fiador', 'Rua Machado de Assis', '82', 'Colombo', 'PR', '83409-600', 'Brasil', 'ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38'),
                
                ('', 'José Alves Lima', 'joselima@mail.com', '(11) 7405-5587', 'Representante Legal', 'Avenida Amador Bueno da Veiga', '1172', 'São Paulo', 'SP', '03635-001', 'Brasil', 'a321237a-d7fe-44be-b4f8-818f87cf7afc'),
                ('', 'Isabelle Barbosa Pinto', 'isabellepinto@mail.com', '(11) 9432-5034', 'Fiador', 'Rua José Benedito Oliveira', '1024', 'Bragança Paulista', 'SP', '12903-210', 'Brasil', 'a321237a-d7fe-44be-b4f8-818f87cf7afc'),
                ('', 'Lavinia Correia Costa', 'laviniaccosta@mail.com', '(11) 9381-8441', 'Fiador', 'Rua José Manuel Nicoli', '607', 'Itapecerica da Serra', 'SP', '06856-710', 'Brasil', 'a321237a-d7fe-44be-b4f8-818f87cf7afc'),
                
                ('', 'Ana Fernandes Cardoso', 'anafernandes@mail.com', '(31) 9024-2093', 'Representante Legal', 'Rua Chico Xavier', '1636', 'Ipatinga', 'MG', '35162-804', 'Brasil', '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8'),
                ('', 'Kai Goncalves Cavalcanti', 'kaigcavalcanti@mail.com', '(27) 3673-8537', 'Fiador', 'Rua Luiz Vassalo', '789', 'Vitória', 'ES', '29020-710', 'Brasil', '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8'),
                ('', 'Ágatha Melo Rodrigues', 'agathamelor@mail.com', '(14) 4042-9142', 'Fiador', 'Rua Piauí', '958', 'Bauru', 'SP', '17013-600', 'Brasil', '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8'),
                ('', 'Kauã Carvalho Martins', 'kauacmartins@mail.com', '(42) 4154-3659', 'Fiador', 'Rua Frei Jacinto de Butiatuba', '1732', 'Ponta Grossa', 'PR', '84032-450', 'Brasil', '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8'),
                ('', 'Douglas Almeida Oliveira', 'douglasalmeida@mail.com', '(38) 8341-3907', 'Fiador', 'Rua N', '1607', 'Montes Claros', 'MG', '39404-127', 'Brasil', '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8'),
                
                ('', '', '@mail.com', '', 'Fiador', '', '', '', '', '', 'Brasil', 'ec19ab4c-5229-4412-9dcc-37f2eb4eaf01'),
                ('', '', '@mail.com', '', 'Fiador', '', '', '', '', '', 'Brasil', '215b9b53-3a62-4aaa-8e3a-45b627682918'),
                ('', '', '@mail.com', '', 'Fiador', '', '', '', '', '', 'Brasil', '28f15310-b087-4a25-98bf-06ae0e0abdeb'),
                ('', '', '@mail.com', '', 'Fiador', '', '', '', '', '', 'Brasil', 'a8e69555-5eda-4832-aad5-a67f947dbe01'),
                ('', '', '@mail.com', '', 'Fiador', '', '', '', '', '', 'Brasil', '22464818-339e-49f3-b439-16838f7f2904'),
                ('', '', '@mail.com', '', 'Fiador', '', '', '', '', '', 'Brasil', '');
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
