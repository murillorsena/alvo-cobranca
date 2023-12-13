'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'shopping_user',
      {
        shopping_id: {
          type: Sequelize.UUID,
          allowNull: false
        },
        user_id: {
          type: Sequelize.UUID,
          allowNull: false
        }
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('shopping_user');
  }
};
