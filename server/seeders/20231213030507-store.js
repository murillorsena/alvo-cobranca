'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'store',
      [
        {
          id: 'b3edf713-bffe-4f4a-97eb-7c71e63e4091',
          code: '10001',
          name: 'Lojas Marisa',
          email: 'contato@marisa.com',
          phone: '(84) 9400-3566'
        },
        {
          id: 'ef13ba88-b10b-4c3b-a5b3-b06a8d68ae38',
          code: '10002',
          name: 'Burger King',
          email: 'contato@burgerking.com',
          phone: '(11) 2621-4810'
        },
        {
          id: 'a321237a-d7fe-44be-b4f8-818f87cf7afc',
          code: '10003',
          name: 'Pizza Hut',
          email: 'contato@pizzahut.com',
          phone: '(47) 7142-4825'
        },
        {
          id: '548cc8c7-5b9d-40a4-9b08-ea27bc3dfee8',
          code: '10004',
          name: 'Spirito Santo',
          email: 'contato@spiritosanto.com',
          phone: '(49) 3751-6989'
        },
        {
          id: 'ec19ab4c-5229-4412-9dcc-37f2eb4eaf01',
          code: '10005',
          name: 'Panvel',
          email: 'contato@panvel.com',
          phone: '(12) 5248-8179'
        },
        {
          id: '215b9b53-3a62-4aaa-8e3a-45b627682918',
          code: '10006',
          name: 'Bella Gula',
          email: 'contato@bellagula.com',
          phone: '(71) 7762-3906'
        },
        {
          id: '28f15310-b087-4a25-98bf-06ae0e0abdeb',
          code: '10007',
          name: 'Beagle',
          email: 'contato@beagle.com',
          phone: '(71) 5273-9374'
        },
        {
          id: 'a8e69555-5eda-4832-aad5-a67f947dbe01',
          code: '10008',
          name: 'Vivo',
          email: 'contato@vivo.com',
          phone: '(14) 2144-6730'
        },
        {
          id: '22464818-339e-49f3-b439-16838f7f2904',
          code: '10009',
          name: 'Chillibeans',
          email: 'contato@chillibeans.com',
          phone: '(11) 8166-5876'
        },
        {
          id: 'bc5fdb6b-7d8d-4b4f-876b-73c39348cc7e',
          code: '10010',
          name: 'Cinemark',
          email: 'contato@cinemark.com',
          phone: '(75) 3770-4305'
        },
        {
          id: '56d45876-5564-4f22-aaf2-da5994b1b330',
          code: '10011',
          name: 'Paquetá Esportes',
          email: 'contato@paquetaesportes.com',
          phone: '(18) 4261-9288'
        },
        {
          id: '6fc73524-860d-4478-9681-797217c6cc6c',
          code: '10012',
          name: 'Lojas Renner',
          email: 'contato@lojasrenner.com',
          phone: '(48) 3426-7493'
        },
        {
          id: 'e1cc04ba-eb68-46da-aaac-b5d442e190d1',
          code: '10013',
          name: 'Belshop',
          email: 'contato@belshop.com',
          phone: '(11) 2758-2848'
        }
      ]
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('store', null);
  }
};
