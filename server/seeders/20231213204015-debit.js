'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'debit', 
      [
        {
          id: 'dd09bfc4-c0d6-44c2-a7e7-a691d43e4085',
          description: 'Aluguel Mínimo',
          amount: '66608.54',
          due_date: '2023-11-05T00:00:00.000Z',
          compensation_date: '2023-11-06T00:00:00.000Z',
          store_id: 'b3edf713-bffe-4f4a-97eb-7c71e63e4091',
          shopping_id: '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c',
          user_id: 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'
        },
        {
          id: '505604d1-534a-4895-b862-d7cc6acb7528',
          description: 'Aluguel Mínimo',
          amount: '66608.54',
          due_date: '2023-12-05T00:00:00.000Z',
          compensation_date: '2023-12-06T00:00:00.000Z',
          store_id: 'b3edf713-bffe-4f4a-97eb-7c71e63e4091',
          shopping_id: '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c',
          user_id: 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'
        },
        {
          id: '02b70188-4610-48d4-90e5-79872d0f0d62',
          description: 'Desconto Aluguel Mínimo',
          amount: '-19982.56',
          due_date: '2023-12-05T00:00:00.000Z',
          compensation_date: '2023-12-06T00:00:00.000Z',
          store_id: 'b3edf713-bffe-4f4a-97eb-7c71e63e4091',
          shopping_id: '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c',
          user_id: 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'
        },
        {
          id: 'e641086e-14d4-4af1-9766-350672c8e7bb',
          description: 'Aluguel Adicional',
          amount: '66608.54',
          due_date: '2023-12-05T00:00:00.000Z',
          compensation_date: '2023-12-06T00:00:00.000Z',
          store_id: 'b3edf713-bffe-4f4a-97eb-7c71e63e4091',
          shopping_id: '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c',
          user_id: 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'
        },
        {
          id: 'cc364718-ee51-45db-8c6f-d6d405c8e0f8',
          description: 'Encargos Condominiais',
          amount: '27604.30',
          due_date: '2023-12-10T00:00:00.000Z',
          compensation_date: '2023-12-10T00:00:00.000Z',
          store_id: 'b3edf713-bffe-4f4a-97eb-7c71e63e4091',
          shopping_id: '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c',
          user_id: 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'
        },
        {
          id: 'a1a15af5-df01-40e4-8e98-8087d798f0b7',
          description: 'Fundo de Promoção',
          amount: '1902.84',
          due_date: '2023-12-10T00:00:00.000Z',
          compensation_date: '2023-12-10T00:00:00.000Z',
          store_id: 'b3edf713-bffe-4f4a-97eb-7c71e63e4091',
          shopping_id: '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c',
          user_id: 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'
        },
        {
          id: '5f777c6f-9e5f-42d0-933e-49dfb4e95c8c',
          description: 'Aluguel Complementar',
          amount: '9991.28',
          due_date: '2023-12-15T00:00:00.000Z',
          compensation_date: null,
          store_id: 'b3edf713-bffe-4f4a-97eb-7c71e63e4091',
          shopping_id: '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c',
          user_id: 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'
        },
        {
          id: '73cbec28-97f0-4134-b60c-f7494a4bc75a',
          description: 'Encargos Condominiais',
          amount: '26592.23',
          due_date: '2024-01-10T00:00:00.000Z',
          compensation_date: null,
          store_id: 'b3edf713-bffe-4f4a-97eb-7c71e63e4091',
          shopping_id: '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c',
          user_id: 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'
        },
        {
          id: '7686a7f4-4b8d-4b6e-bf98-4a0180df83a6',
          description: 'Aluguel Mínimo',
          amount: '13030.51',
          due_date: '2023-12-05T00:00:00.000Z',
          compensation_date: null,
          store_id: 'ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38',
          shopping_id: 'caadb02c-ff70-4073-89aa-b406b633d68d',
          user_id: 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'
        },
        {
          id: 'f16e12b1-14dd-44fe-883c-ee558d91138a',
          description: 'Desconto Aluguel Mínimo',
          amount: '-2328.55',
          due_date: '2023-12-05T00:00:00.000Z',
          compensation_date: '2023-12-06T00:00:00.000Z',
          store_id: 'ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38',
          shopping_id: 'caadb02c-ff70-4073-89aa-b406b633d68d',
          user_id: 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'
        },
        {
          id: '74300f09-2f0c-40d7-8c46-ee9cd4e88aeb',
          description: 'Aluguel Adicional',
          amount: '13030.51',
          due_date: '2023-12-05T00:00:00.000Z',
          compensation_date: null,
          store_id: 'ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38',
          shopping_id: 'caadb02c-ff70-4073-89aa-b406b633d68d',
          user_id: 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'
        },
        {
          id: '1a1f3bd3-4d37-4a4e-9d2b-c0e94eb74a51',
          description: 'Encargos Condominiais',
          amount: '24953.32',
          due_date: '2023-12-10T00:00:00.000Z',
          compensation_date: null,
          store_id: 'ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38',
          shopping_id: 'caadb02c-ff70-4073-89aa-b406b633d68d',
          user_id: 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'
        },
        {
          id: 'fcd3c058-6f82-450f-81f8-9f611da55b4a',
          description: 'Aluguel Mínimo',
          amount: '26864.04',
          due_date: '2023-12-05T00:00:00.000Z',
          compensation_date: '2023-12-05T00:00:00.000Z',
          store_id: '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8',
          shopping_id: '4f8609f3-f45d-4d7d-a5fd-9f1fa46baaab',
          user_id: 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'
        },
        {
          id: '7979fe9f-ba7a-46ef-8606-06902406d805',
          description: 'Desconto Aluguel Mínimo',
          amount: '-5098.79',
          due_date: '2023-12-05T00:00:00.000Z',
          compensation_date: '2023-12-05T00:00:00.000Z',
          store_id: '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8',
          shopping_id: '4f8609f3-f45d-4d7d-a5fd-9f1fa46baaab',
          user_id: 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'
        },
        {
          id: '2a3c247f-af5f-45be-a40a-ca63f075248c',
          description: 'Aluguel Adicional',
          amount: '26864.04',
          due_date: '2023-12-05T00:00:00.000Z',
          compensation_date: '2023-12-10T00:00:00.000Z',
          store_id: '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8',
          shopping_id: '4f8609f3-f45d-4d7d-a5fd-9f1fa46baaab',
          user_id: 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'
        },
        {
          id: '14ace684-b53e-4159-954c-ad0da08645ea',
          description: 'Encargos Condominiais',
          amount: '12064.15',
          due_date: '2023-12-10T00:00:00.000Z',
          compensation_date: null,
          store_id: '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8',
          shopping_id: '4f8609f3-f45d-4d7d-a5fd-9f1fa46baaab',
          user_id: 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'
        },
        {
          id: '448fbcb3-e2b5-4a4f-afa4-26c6022e0bc0',
          description: 'Fundo de Promoção',
          amount: '5372.81',
          due_date: '2023-12-10T00:00:00.000Z',
          compensation_date: null,
          store_id: '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8',
          shopping_id: '4f8609f3-f45d-4d7d-a5fd-9f1fa46baaab',
          user_id: 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'
        },
        {
          id: '9153ca2d-b1d8-493c-8127-6f72430f542d',
          description: 'Aluguel Complementar',
          amount: '3264.79',
          due_date: '2023-12-15T00:00:00.000Z',
          compensation_date: null,
          store_id: '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8',
          shopping_id: '4f8609f3-f45d-4d7d-a5fd-9f1fa46baaab',
          user_id: 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'
        },
        {
          id: '0e318411-ebfa-4ae7-8180-b792a63f5ab5',
          description: 'Aluguel Mínimo',
          amount: '138872.67',
          due_date: '2023-12-05T00:00:00.000Z',
          compensation_date: null,
          store_id: 'ec19ab4c-5229-4412-9dcc-37f2eb4eaf01',
          shopping_id: '6a021ef2-ebca-4d3e-a8e1-443b5261cf22',
          user_id: 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'
        },
        {
          id: 'c2089536-6398-4647-9d06-f05610d661ee',
          description: 'Desconto Aluguel Mínimo',
          amount: '-28635.54',
          due_date: '2023-12-05T00:00:00.000Z',
          compensation_date: null,
          store_id: 'ec19ab4c-5229-4412-9dcc-37f2eb4eaf01',
          shopping_id: '6a021ef2-ebca-4d3e-a8e1-443b5261cf22',
          user_id: 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'
        },
        {
          id: 'a814b501-eca7-4bb3-a01f-6972b81fb198',
          description: 'Encargos Condominiais',
          amount: '29107.98',
          due_date: '2023-12-10T00:00:00.000Z',
          compensation_date: null,
          store_id: 'ec19ab4c-5229-4412-9dcc-37f2eb4eaf01',
          shopping_id: '6a021ef2-ebca-4d3e-a8e1-443b5261cf22',
          user_id: 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'
        },
        {
          id: '4bd5839f-31e9-47dc-ac76-94d6c2a09eac',
          description: 'Encargos Condominiais',
          amount: '23608.35',
          due_date:'2024-01-10T00:00:00.000Z',
          compensation_date: null,
          store_id: 'ec19ab4c-5229-4412-9dcc-37f2eb4eaf01',
          shopping_id: '6a021ef2-ebca-4d3e-a8e1-443b5261cf22',
          user_id: 'c6dbd233-9965-48f0-899e-fdb92fddcb9b'
        },
        {
          id: '90bc8667-b511-41e3-b678-67f43d3218eb',
          description: 'Aluguel Mínimo',
          amount: '41993.00',
          due_date: '2023-12-05T00:00:00.000Z',
          compensation_date: null,
          store_id: 'a8e69555-5eda-4832-aad5-a67f947dbe01',
          shopping_id: '11e4e51c-dc76-4454-8c6a-4e4f8a14b806',
          user_id: 'a2faeae0-1441-4a18-9bab-88f79b356eac'
        },
        {
          id: 'f4e82f0e-f4d2-4925-972f-733c6cb86bcc',
          description: 'Encargos Condominiais',
          amount: '16994.86',
          due_date: '2023-12-10T00:00:00.000Z',
          compensation_date: null,
          store_id: 'a8e69555-5eda-4832-aad5-a67f947dbe01',
          shopping_id: '11e4e51c-dc76-4454-8c6a-4e4f8a14b806',
          user_id: 'a2faeae0-1441-4a18-9bab-88f79b356eac'
        },
        {
          id: 'f01771a4-a65f-4d1e-b1fe-4f93ef052295',
          description: 'Fundo de Promoção',
          amount: '8398.60',
          due_date: '2023-12-10T00:00:00.000Z',
          compensation_date: null,
          store_id: 'a8e69555-5eda-4832-aad5-a67f947dbe01',
          shopping_id: '11e4e51c-dc76-4454-8c6a-4e4f8a14b806',
          user_id: 'a2faeae0-1441-4a18-9bab-88f79b356eac'
        },
        {
          id: '1c316699-d55c-4d12-a0c3-9b2a5136a1d3',
          description: 'Nota Promissória de Aluguel',
          amount: '2379.31',
          due_date: '2023-10-20T00:00:00.000Z',
          compensation_date: '2023-10-23T00:00:00.000Z',
          store_id: '22464818-339e-49f3-b439-16838f7f2904',
          shopping_id: '2475a51e-f0f8-4239-a32b-819be34ecd63',
          user_id: 'a2faeae0-1441-4a18-9bab-88f79b356eac'
        },
        {
          id: 'f6af15ed-45a2-4c05-bdbd-c88d5a66c889',
          description: 'Nota Promissória de Aluguel',
          amount: '2379.31',
          due_date:'2023-11-20T00:00:00.000Z',
          compensation_date: '2023-11-20T00:00:00.000Z',
          store_id: '22464818-339e-49f3-b439-16838f7f2904',
          shopping_id: '2475a51e-f0f8-4239-a32b-819be34ecd63',
          user_id: 'a2faeae0-1441-4a18-9bab-88f79b356eac'
        },
        {
          id: '3ea9a8de-5573-4aa9-901f-f040462fa1a1',
          description: 'Aluguel Mínimo',
          amount: '10289.77',
          due_date: '2023-12-05T00:00:00.000Z',
          compensation_date: '2023-12-08T00:00:00.000Z',
          store_id: '22464818-339e-49f3-b439-16838f7f2904',
          shopping_id: '2475a51e-f0f8-4239-a32b-819be34ecd63',
          user_id: 'a2faeae0-1441-4a18-9bab-88f79b356eac'
        },
        {
          id: '7cee582b-118f-49e0-b724-9597e23e4f81',
          description: 'Desconto Aluguel Mínimo',
          amount: '-3601.42',
          due_date: '2023-12-05T00:00:00.000Z',
          compensation_date: '2023-12-08T00:00:00.000Z',
          store_id: '22464818-339e-49f3-b439-16838f7f2904',
          shopping_id: '2475a51e-f0f8-4239-a32b-819be34ecd63',
          user_id: 'a2faeae0-1441-4a18-9bab-88f79b356eac'
        },
        {
          id: '858e4696-649f-4701-99dd-211786c7c3ba',
          description: 'Encargos Condominiais',
          amount: '2405.35',
          due_date: '2023-12-10T00:00:00.000',
          compensation_date: null,
          store_id: '22464818-339e-49f3-b439-16838f7f2904',
          shopping_id: '2475a51e-f0f8-4239-a32b-819be34ecd63',
          user_id: 'a2faeae0-1441-4a18-9bab-88f79b356eac'
        },
        {
          id: '9c7ef0d4-2d44-44d8-8721-9ee6e6deb76c',
          description: 'Fundo de Promoção',
          amount: '2057.95',
          due_date: '2023-12-10T00:00:00.000Z',
          compensation_date: null,
          store_id: '22464818-339e-49f3-b439-16838f7f2904',
          shopping_id: '2475a51e-f0f8-4239-a32b-819be34ecd63',
          user_id: 'a2faeae0-1441-4a18-9bab-88f79b356eac'
        },
        {
          id: '9e7ed8af-bb97-4ef1-9646-d8a05ca9acd4',
          description: 'Nota Promissória de Aluguel',
          amount: '2379.31',
          due_date: '2023-12-20T00:00:00.000Z',
          compensation_date: null,
          store_id: '22464818-339e-49f3-b439-16838f7f2904',
          shopping_id: '2475a51e-f0f8-4239-a32b-819be34ecd63',
          user_id: 'a2faeae0-1441-4a18-9bab-88f79b356eac'
        },
        {
          id: 'ff4c0ef1-0096-4cb8-9f15-b9ff8c3bf1e9',
          description: 'Aluguel Mínimo',
          amount: '10289.77',
          due_date: '2024-01-05T00:00:00.000Z',
          compensation_date: null,
          store_id: '22464818-339e-49f3-b439-16838f7f2904',
          shopping_id: '2475a51e-f0f8-4239-a32b-819be34ecd63',
          user_id: 'a2faeae0-1441-4a18-9bab-88f79b356eac'
        },
        {
          id: 'cbcd9420-9b6e-4644-bc86-0d86585b6332',
          description: 'Desconto Aluguel Mínimo',
          amount: '-3601.42',
          due_date: '2024-01-05T00:00:00.000Z',
          compensation_date: null,
          store_id: '22464818-339e-49f3-b439-16838f7f2904',
          shopping_id: '2475a51e-f0f8-4239-a32b-819be34ecd63',
          user_id: 'a2faeae0-1441-4a18-9bab-88f79b356eac'
        },
        {
          id: 'febef2b3-806b-4aa2-affb-cfcf9cfede97',
          description: 'Nota Promissória de Aluguel',
          amount: '2379.31',
          due_date: '2024-01-20T00:00:00.000Z',
          compensation_date: null,
          store_id: '22464818-339e-49f3-b439-16838f7f2904',
          shopping_id: '2475a51e-f0f8-4239-a32b-819be34ecd63',
          user_id: 'a2faeae0-1441-4a18-9bab-88f79b356eac'
        },
        {
          id: '8b07cd08-ce03-44af-9eaf-6f37cb52331d',
          description: 'Nota Promissória de Aluguel',
          amount: '2379.31',
          due_date: '2024-02-20T00:00:00.000Z',
          compensation_date: null,
          store_id: '22464818-339e-49f3-b439-16838f7f2904',
          shopping_id: '2475a51e-f0f8-4239-a32b-819be34ecd63',
          user_id: 'a2faeae0-1441-4a18-9bab-88f79b356eac'
        },
        {
          id: 'cc1fc68d-5aa5-4da6-9fa3-606505e73abb',
          description: 'Aluguel Mínimo',
          amount: '52087.34',
          due_date: '2023-12-05T00:00:00.000Z',
          compensation_date: '2023-12-05T00:00:00.000Z',
          store_id: '56d45876-5564-4f22-aaf2-da5994b1b330',
          shopping_id: '462b71bc-cd27-457d-918e-b4c092dd0fbc',
          user_id: 'a2faeae0-1441-4a18-9bab-88f79b356eac'
        },
        {
          id: 'f0518642-dea8-4ced-872a-5c1afd432a82',
          description: 'Desconto Aluguel Mínimo',
          amount: '-42218.87',
          due_date: '2023-12-05T00:00:00.000Z',
          compensation_date: '2023-12-05T00:00:00.000Z',
          store_id: '56d45876-5564-4f22-aaf2-da5994b1b330',
          shopping_id: '462b71bc-cd27-457d-918e-b4c092dd0fbc',
          user_id: 'a2faeae0-1441-4a18-9bab-88f79b356eac'
        },
        {
          id: '143f92e7-d957-41c7-958c-1f3d72f08f28',
          description: 'Encargos Condominiais',
          amount: '42092.26',
          due_date: '2023-12-10T00:00:00.000Z',
          compensation_date: null,
          store_id: '56d45876-5564-4f22-aaf2-da5994b1b330',
          shopping_id: '462b71bc-cd27-457d-918e-b4c092dd0fbc',
          user_id: 'a2faeae0-1441-4a18-9bab-88f79b356eac'
        },
        {
          id: 'aab1d437-2301-47df-a4c9-cee96a8fb2bf',
          description: 'Fundo de Promoção',
          amount: '1622.18',
          due_date: '2023-12-10T00:00:00.000Z',
          compensation_date: null,
          store_id: '56d45876-5564-4f22-aaf2-da5994b1b330',
          shopping_id: '462b71bc-cd27-457d-918e-b4c092dd0fbc',
          user_id: 'a2faeae0-1441-4a18-9bab-88f79b356eac'
        },
        {
          id: '47907ad1-72ab-43b3-a7fd-0f95dd366897',
          description: 'Desconto Fundo de Promoção',
          amount: '-1297.74',
          due_date: '2023-12-10T00:00:00.000Z',
          compensation_date: null,
          store_id: '56d45876-5564-4f22-aaf2-da5994b1b330',
          shopping_id: '462b71bc-cd27-457d-918e-b4c092dd0fbc',
          user_id: 'a2faeae0-1441-4a18-9bab-88f79b356eac'
        },
      ]
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('debit', null);
  }
};
