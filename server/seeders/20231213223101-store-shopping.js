'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'store_shopping',
      [
        {
          store_id: 'b3edf713-bffe-4f4a-97eb-7c71e63e4091',
          shopping_id: '0276ad94-d5d8-4b17-9b63-45ccff6e1b7c'
        },
        {
          store_id: 'ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38',
          shopping_id: 'caadb02c-ff70-4073-89aa-b406b633d68d'
        },
        {
          store_id: 'a321237a-d7fe-44be-b4f8-818f87cf7afc',
          shopping_id: '0d986235-5e8c-434e-a290-5fa65878a7ec'
        },
        {
          store_id: '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8',
          shopping_id: '4f8609f3-f45d-4d7d-a5fd-9f1fa46baaab'
        },
        {
          store_id: 'ec19ab4c-5229-4412-9dcc-37f2eb4eaf01',
          shopping_id: '6a021ef2-ebca-4d3e-a8e1-443b5261cf22'
        },
        {
          store_id: '215b9b53-3a62-4aaa-8e3a-45b627682918',
          shopping_id: '037cdc11-d767-4a8a-b15e-5eba194b3904'
        },
        {
          store_id: '28f15310-b087-4a25-98bf-06ae0e0abdeb',
          shopping_id: 'f27d5dec-2b45-427e-96a7-859335c4c2ca'
        },
        {
          store_id: 'a8e69555-5eda-4832-aad5-a67f947dbe01',
          shopping_id: '11e4e51c-dc76-4454-8c6a-4e4f8a14b806'
        },
        {
          store_id: '22464818-339e-49f3-b439-16838f7f2904',
          shopping_id: '2475a51e-f0f8-4239-a32b-819be34ecd63'
        },
        {
          store_id: 'bc5fdb6b-7d8d-4b4f-876b-73c39348cc7e',
          shopping_id: '7cf491b2-1cd5-4bd6-a2fa-8a32194ff1d4'
        },
        {
          store_id: '56d45876-5564-4f22-aaf2-da5994b1b330',
          shopping_id: '015c8fba-4d4e-4387-875a-f22ea82a7112'
        },
        {
          store_id: '6fc73524-860d-4478-9681-797217c6cc6c',
          shopping_id: '462b71bc-cd27-457d-918e-b4c092dd0fbc'
        },
        {
          store_id: 'e1cc04ba-eb68-46da-aaac-b5d442e190d1',
          shopping_id: '1c2dc42d-011a-4bd7-97a9-6a9b2f769b94'
        }
      ]
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('store_shopping', null);
  }
};
