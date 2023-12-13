'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'shopping2',
      [
        {
          id: '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c',
          code: '8000',
          name: 'BSWA',
          description: 'Bourbon Shopping Wallig'
        },
        {
          id: 'caadb02c-ff70-4073-89aa-b406b633d68d',
          code: '8001',
          name: 'BSAB',
          description: 'Bourbon Shopping Assis Brasil'
        },
        {
          id: '0d986235-5e8c-434e-a290-5fa65878a7ec',
          code: '8002',
          name: 'BSCA',
          description: 'Bourbon Shopping Canoas'
        },
        {
          id: '4f8609f3-f45d-4d7d-a5fd-9f1fa46baaab',
          code: '8003',
          name: 'BSIP',
          description: 'Bourbon Shopping Ipiranga'
        },
        {
          id: '6a021ef2-ebca-4d3e-a8e1-443b5261cf22',
          code: '8004',
          name: 'BSCT',
          description: 'Bourbon Shopping Country'
        },
        {
          id: '037cdc11-d767-4a8a-b15e-5eba194b3904',
          code: '8005',
          name: 'BSSL',
          description: 'Bourbon Shopping São Leopolso'
        },
        {
          id: 'f27d5dec-2b45-427e-96a7-859335c4c2ca',
          code: '8006',
          name: 'BSNH',
          description: 'Bourbon Shopping Novo Hamburgo'
        },
        {
          id: '11e4e51c-dc76-4454-8c6a-4e4f8a14b806',
          code: '8007',
          name: 'BSSP',
          description: 'Bourbon Shopping São Paulo'
        },
        {
          id: '2475a51e-f0f8-4239-a32b-819be34ecd63',
          code: '8009',
          name: 'PACL',
          description: 'Porto Alegre CenterLar'
        },
        {
          id: '7cf491b2-1cd5-4bd6-a2fa-8a32194ff1d4',
          code: '8010',
          name: 'MOSH',
          description: 'Moinhos Shopping'
        },
        {
          id: '015c8fba-4d4e-4387-875a-f22ea82a7112',
          code: '8011',
          name: 'ZMHI',
          description: 'Zaffari Mall Hípica '
        },
        {
          id: '462b71bc-cd27-457d-918e-b4c092dd0fbc',
          code: '8012',
          name: 'BSPL',
          description: 'Bourbon Shopping San Pellegrino'
        },
        {
          id: '1c2dc42d-011a-4bd7-97a9-6a9b2f769b94',
          code: '8013',
          name: 'BSTS',
          description: 'Bourbon Shopping Teresópolis'
        }
      ]
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('shopping2', null);
  }
};
