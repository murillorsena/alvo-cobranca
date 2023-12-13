'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'store_representative',
      {
        store_id: {
          type: Sequelize.UUID,
          allowNull: false
        },
        representative_id: {
          type: Sequelize.UUID,
          allowNull: false
        }
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('store_representative');
  }
};
