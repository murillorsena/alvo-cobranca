'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'shopping',
      {
        id: {
          type: Sequelize.UUID,
          allowNull: false,
          primaryKey: true
        },
        code: {
          type: Sequelize.TEXT,
          allowNull: false,
          unique: true
        },
        name: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: false
        }
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('shopping');
  }
};
