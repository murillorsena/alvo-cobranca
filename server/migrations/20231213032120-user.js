'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'user2',
      {
        id: {
          type: Sequelize.UUID,
          allowNull: false,
          primaryKey: true
        },
        name: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        email: {
          type: Sequelize.TEXT,
          allowNull: false,
          unique: true
        },
        password: {
          type: Sequelize.TEXT,
          allowNull: false
        }
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('user2');
  }
};
