'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'store_shopping',
      {
        store_id: {
          type: Sequelize.UUID,
          allowNull: false
        },
        shopping_id: {
          type: Sequelize.UUID,
          allowNull: false
        }
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('store_shopping');
  }
};
