'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'representative2',
      [
        {
          id: '9d0b1637-51f5-4d96-9f46-04bf783a5113',
          name: 'Erick Melo Cunha',
          email: 'erickcunha@mail.com',
          phone: '(47) 9972-8236',
          address: 'Rua Alois Finder, 1511',
          role: 'Representante Legal',
          store_id: 'b3edf713-bffe-4f4a-97eb-7c71e63e4091'
        },
        {
          id: 'c5730bb2-1b36-4895-b77d-f9d7a68ef239',
          name: 'Sarah Souza Sousa',
          email: 'sarahsousa@mail.com',
          phone: '(31) 6628-7573',
          address: 'Praça Marcelo Alves Cordeiro, 383',
          role: 'Fiador',
          store_id: 'b3edf713-bffe-4f4a-97eb-7c71e63e4091'
        },
        {
          id: '958d962f-fe5a-4ce9-8ff2-1bd97e2b24a8',
          name: 'Marcos Gomes Carvalho',
          email: 'marcoscarvalho@mail.com',
          phone: '(71) 5867-3864',
          address: 'Travessa Baixa dos Frades, 165',
          role: 'Fiador',
          store_id: 'b3edf713-bffe-4f4a-97eb-7c71e63e4091'
        },
        {
          id: 'b649f543-d951-44b5-9a99-61eb4f1e6480',
          name: 'Mateus Pereira Sousa',
          email: 'mateuspereira@mail.com',
          phone: '(34) 8457-2302',
          address: 'Rua Águas do Araxá, 1457',
          role: 'Fiador',
          store_id: 'b3edf713-bffe-4f4a-97eb-7c71e63e4091'
        },
        {
          id: '611bbc3c-3e3d-4a17-b03c-1b95e71c91d1',
          name: 'Lara Souza Costa',
          email: 'laracosta@mail.com',
          phone: '(12) 8437-8289',
          address: 'Alameda dos Lírios, 1908',
          role: 'Representante Legal',
          store_id: 'ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38'
        },
        {
          id: 'b0a6244f-36a2-411c-a840-8ee7ca586843',
          name: 'Gabrielle Rocha Correia',
          email: 'gabriellecorreia@mail.com',
          phone: '(41) 3096-7735',
          address: 'Rua Machado de Assis, 82',
          role: 'Fiador',
          store_id: 'ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38'
        },
        {
          id: 'ec5f6f01-c622-4aea-9fcd-36d2431e7edd',
          name: 'José Alves Lima',
          email: 'joselima@mail.com',
          phone: '(11) 7405-5587',
          address: 'Avenida Amador Bueno da Veiga, 1172',
          role: 'Representante Legal',
          store_id: 'a321237a-d7fe-44be-b4f8-818f87cf7afc'
        },
        {
          id: '5ac2d21d-007d-4842-a46b-7a542fb24a73',
          name: 'Isabelle Barbosa Pinto',
          email: 'isabellepinto@mail.com',
          phone: '(11) 9432-5034',
          address: 'Rua José Benedito Oliveira, 1024',
          role: 'Fiador',
          store_id: 'a321237a-d7fe-44be-b4f8-818f87cf7afc'
        },
        {
          id: 'ea80a4fa-6243-4933-abac-fe8155a21972',
          name: 'Lavinia Correia Costa',
          email: 'laviniaccosta@mail.com',
          phone: '(11) 9381-8441',
          address: 'Rua José Manuel Nicoli, 607',
          role: 'Fiador',
          store_id: 'a321237a-d7fe-44be-b4f8-818f87cf7afc'
        },
        {
          id: '87fbdf01-3857-4bc0-9314-2cd2a3e5cc59',
          name: 'Ana Fernandes Cardoso',
          email: 'anafernandes@mail.com',
          phone: '(31) 9024-2093',
          address: 'Rua Chico Xavier, 1636',
          role: 'Representante Legal',
          store_id: '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8'
        },
        {
          id: 'f500d265-7a59-46ee-8e2e-8def2488bb32',
          name: 'Kai Goncalves Cavalcanti',
          email: 'kaigcavalcanti@mail.com',
          phone: '(27) 3673-8537',
          address: 'Rua Luiz Vassalo, 789',
          role: 'Fiador',
          store_id: '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8'
        },
        {
          id: 'db094731-c91c-4042-a947-f9c886f2959e',
          name: 'Ágatha Melo Rodrigues',
          email: 'agathamelor@mail.com',
          phone: '(14) 4042-9142',
          address: 'Rua Piauí, 958',
          role: 'Fiador',
          store_id: '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8'
        },
        {
          id: '582de66b-c3ec-4df8-a872-2b98b9a5eb8e',
          name: 'Kauã Carvalho Martins',
          email: 'kauacmartins@mail.com',
          phone: '(42) 4154-3659',
          address: 'Rua Frei Jacinto de Butiatuba, 1732',
          role: 'Fiador',
          store_id: '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8'
        },
        {
          id: '2de5142a-5b05-4570-82b6-7d84a66b66ce',
          name: 'Murilo Carvalho Fernandes',
          email: 'murilofernandes@mail.com',
          phone: '(21) 9521-9675',
          address: 'Rua Yassuite Inove, 49',
          role: 'Fiador',
          store_id: '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8'
        },
        {
          id: 'eae8e7e1-cd1a-4483-821b-05f287555901',
          name: 'Luiza Cavalcanti Costa',
          email: 'luizacosta@mail.com',
          phone: '(27) 4899-4021',
          address: 'Rua das Camomilas, 1990',
          role: 'Representante Legal',
          store_id: 'ec19ab4c-5229-4412-9dcc-37f2eb4eaf01'
        },
        {
          id: 'bd71ad19-ccfa-4f16-b727-897597c27a44',
          name: 'Ana Araujo Lima',
          email: 'analima@mail.com',
          phone: '(24) 7513-5984',
          address: 'Rua Marcone, 1044',
          role: 'Representante Legal',
          store_id: 'ec19ab4c-5229-4412-9dcc-37f2eb4eaf01'
        },
        {
          id: '10b4fd65-0f19-4c17-a189-234c74968d0a',
          name: 'André Barros Costa',
          email: 'andrecosta@mail.com',
          phone: '(11) 5259-5558',
          address: 'Rua Procópio de Oliveira, 486',
          role: 'Fiador',
          store_id: 'ec19ab4c-5229-4412-9dcc-37f2eb4eaf01'
        },
        {
          id: '65615ef9-0d54-4da2-8b1f-e30360b95562',
          name: 'Anna Dias Carvalho',
          email: 'annadiascarvalho@mail.com',
          phone: '(37) 3792-7523',
          address: 'Conjunto Arembepe, 1707',
          role: 'Representante Legal',
          store_id: '215b9b53-3a62-4aaa-8e3a-45b627682918'
        },
        {
          id: 'ac02163e-dea3-4673-b8ce-17c9b1dea36f',
          name: 'Ana Costa Alves',
          email: 'anaalves@mail.com',
          phone: '(51) 8913-9942',
          address: 'Rua Manoel Bandeira, 1881',
          role: 'Fiador',
          store_id: '215b9b53-3a62-4aaa-8e3a-45b627682918'
        },
        {
          id: 'c95a30a1-6add-4a1c-b453-e22bdb8881e7',
          name: 'Pedro Alves Carvalho',
          email: 'pedroalves@mail.com',
          phone: '(32) 5137-6865',
          address: 'Avenida Mississipi, 715',
          role: 'Fiador',
          store_id: '215b9b53-3a62-4aaa-8e3a-45b627682918'
        },
        {
          id: 'fb0f01a4-1bcd-4fc2-99a7-cbb1fdb2a1b0',
          name: 'Enzo Pinto Alves',
          email: 'enzoalves@mail.com',
          phone: '(11) 9873-9975',
          address: 'Rua Ecoporanga, 1990',
          role: 'Fiador',
          store_id: '215b9b53-3a62-4aaa-8e3a-45b627682918'
        },
        {
          id: '99ab0b81-c98a-4080-be0f-d73cf10fa24e',
          name: 'Julia Carvalho Araujo',
          email: 'juliaaraujo@mail.com',
          phone: '(11) 8977-8947',
          address: 'Estrada do Alvarenga, 1493',
          role: 'Representante Legal',
          store_id: '28f15310-b087-4a25-98bf-06ae0e0abdeb'
        },
        {
          id: 'c49d75da-aa84-4aff-8b0b-60d52d4afa8f',
          name: 'Lavinia Gomes Pinto',
          email: 'laviniagomes@mail.com',
          phone: '(21) 4521-5744',
          address: 'Alameda Quero-queros, 1138',
          role: 'Fiador',
          store_id: '28f15310-b087-4a25-98bf-06ae0e0abdeb'
        },
        {
          id: '88fed36b-f78c-415e-8a36-059946829561',
          name: 'Kaua Silva Ribeiro',
          email: 'kauaribeiro@mail.com',
          phone: '(87) 2665-7377',
          address: 'Avenida Joaquim Nabuco, 1774',
          role: 'Representante Legal',
          store_id: 'a8e69555-5eda-4832-aad5-a67f947dbe01'
        },
        {
          id: 'a30cbbc0-b57f-428d-a56d-2b8cfa915eab',
          name: 'Cauã Dias Souza',
          email: 'cauasouza@mail.com',
          phone: '(34) 3735-3716',
          address: 'Rua Geraldo José da Costa, 714',
          role: 'Fiador',
          store_id: 'a8e69555-5eda-4832-aad5-a67f947dbe01'
        },
        {
          id: '1f2354a8-8abd-47c8-92ba-78a61944ea51',
          name: 'Guilherme Gomes Oliveira',
          email: 'guilhermeoliveira@mail.com',
          phone: '(79) 7398-2891',
          address: 'Rua Espírito Santo, 1037',
          role: 'Fiador',
          store_id: 'a8e69555-5eda-4832-aad5-a67f947dbe01'
        },
        {
          id: '7286934d-6242-45c5-8c81-80ade413d08e',
          name: 'Joao Pereira Martins',
          email: 'joaomartins@mail.com',
          phone: '(71) 8154-2436',
          address: '1ª Travessa Carlos Gentil, 1308',
          role: 'Representante Legal',
          store_id: '22464818-339e-49f3-b439-16838f7f2904'
        },
        {
          id: '804d3751-9ff0-4d62-a896-2441a1f05cce',
          name: 'Sarah Goncalves Melo',
          email: 'sarahmelo@mail.com',
          phone: '(22) 3969-2282',
          address: 'Rua Joana Dark, 575',
          role: 'Fiador',
          store_id: '22464818-339e-49f3-b439-16838f7f2904'
        },
        {
          id: '38231668-fbe0-45da-afa5-e926d04787ce',
          name: 'Leonor Almeida Araujo',
          email: 'leonoralmeida@mail.com',
          phone: '(47) 7515-6852',
          address: 'Rua Sombrio, 1740',
          role: 'Representante Legal',
          store_id: 'bc5fdb6b-7d8d-4b4f-876b-73c39348cc7e'
        },
        {
          id: 'a36cdbf7-c3c1-4bd0-8674-8fb703e37dbc',
          name: 'Miguel Pinto Silva',
          email: 'miguelsilva@mail.com',
          phone: '(21) 6873-9819',
          address: 'Rua Mutambeira, 373',
          role: 'Representante Legal',
          store_id: 'bc5fdb6b-7d8d-4b4f-876b-73c39348cc7e'
        },
        {
          id: 'da314d74-d5c0-4ccf-8ff7-92b7e287b0ed',
          name: 'Antônio Correia Araujo',
          email: 'antoniocorreia@mail.com',
          phone: '(14) 2143-4589',
          address: 'Travessa Henrique Pavão, 206',
          role: 'Representante Legal',
          store_id: 'bc5fdb6b-7d8d-4b4f-876b-73c39348cc7e'
        },
        {
          id: 'cd50c5c8-e05d-4090-a4c7-d7e35fde8db4',
          name: 'Kauã Souza Costa',
          email: 'kauacosta@mail.com',
          phone: '(65) 5818-4485',
          address: 'Rua Cinco, 1550',
          role: 'Fiador',
          store_id: 'bc5fdb6b-7d8d-4b4f-876b-73c39348cc7e'
        },
        {
          id: '26e55f0b-c52d-45be-b24b-476dc47338ec',
          name: 'Gabrielly Silva Pereira',
          email: 'gabriellypereira@mail.com',
          phone: '(71) 3872-9825',
          address: 'Travessa do Abacaxi, 1676',
          role: 'Representante Legal',
          store_id: '56d45876-5564-4f22-aaf2-da5994b1b330'
        },
        {
          id: 'd5c5c38c-e3bb-4257-96d0-e1fe2245fa1e',
          name: 'Letícia Barros Lima',
          email: 'leticiabarros@mail.com',
          phone: '(62) 6325-4108',
          address: 'Viela 24, 1509',
          role: 'Fiador',
          store_id: '56d45876-5564-4f22-aaf2-da5994b1b330'
        },
        {
          id: '410b79dc-c597-49b1-b350-79c8ffd42ea0',
          name: 'Diogo Almeida Barros',
          email: 'diogobarros@mail.com',
          phone: '(31) 2318-6114',
          address: 'Rua Ouro, 1540',
          role: 'Fiador',
          store_id: '56d45876-5564-4f22-aaf2-da5994b1b330'
        },
        {
          id: 'b01a61c9-66f9-4460-b82e-eef96939d1a7',
          name: 'Vinícius Rodrigues Barbosa',
          email: 'viniciusbarbosa@mail.com',
          phone: '(11) 8290-2566',
          address: 'Rua Brazeliza Alves Carvalho, 882',
          role: 'Representante Legal',
          store_id: '6fc73524-860d-4478-9681-797217c6cc6c'
        },
        {
          id: '1c7bc6da-c105-4985-b5d7-e4d1819f2c9e',
          name: 'Emily Pereira Cardoso',
          email: 'emilycardoso@mail.com',
          phone: '(64) 5519-9574',
          address: 'Avenida H, 709',
          role: 'Fiador',
          store_id: '6fc73524-860d-4478-9681-797217c6cc6c'
        },
        {
          id: '3b942b4b-d29c-47ea-af6c-5fca558e2dc9',
          name: 'Fábio Melo Gomes',
          email: 'fabiomelo@mail.com',
          phone: '(31) 9578-8243',
          address: 'Rua Júlio Ferraz, 1653',
          role: 'Representante Legal',
          store_id: 'e1cc04ba-eb68-46da-aaac-b5d442e190d1'
        },
        {
          id: 'fe69a864-6207-488f-bdc9-68c9e2ba2fe5',
          name: 'Joao Pinto Costa',
          email: 'joaopcosta@mail.com',
          phone: '(22) 5671-7385',
          address: 'Rua Casimiro de Abreu, 1457',
          role: 'Fiador',
          store_id: 'e1cc04ba-eb68-46da-aaac-b5d442e190d1'
        }
      ]
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('representative2', null);
  }
};
