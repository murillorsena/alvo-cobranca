'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'collection_action', 
      [
        {
          id: 'f4fc1bc9-1c48-42a2-aa24-222922b9a4ba',
          type: 'email',
          content: 'E-mail enviado com a relação dos débitos em aberto, aguardando previsão de pagamento.',
          created_at: '2023-12-11T00:09:22.11Z',
          updated_at: null,
          store_id: 'b3edf713-bffe-4f4a-97eb-7c71e63e4091',
          user_id: 'c6dbd233-9965-48f0-899e-fdb92fddcb9b',
        },
        {
          id: 'db19c145-131f-4c67-8d25-ebb840da861e',
          type: 'meeting',
          content: 'Reunião agendada no dia 15/12/2023, as 10:30h, na administração - sala D.',
          created_at: '2023-12-11T00:13:21.11Z',
          updated_at: null,
          store_id: 'b3edf713-bffe-4f4a-97eb-7c71e63e4091',
          user_id: 'a2faeae0-1441-4a18-9bab-88f79b356eac',
        },
        {
          id: 'a0be347a-3195-439f-9a82-802adfbbcd6f',
          type: 'email',
          content: 'E-mail de cobrança enviado, lojista informa que irá realizar o pagamento na data de hoje.',
          created_at: '2023-12-12T09:13:18.55Z',
          updated_at: null,
          store_id: 'b3edf713-bffe-4f4a-97eb-7c71e63e4091',
          user_id: 'c6dbd233-9965-48f0-899e-fdb92fddcb9b',
        }
      ]
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('collection_action', null);
  }
};
