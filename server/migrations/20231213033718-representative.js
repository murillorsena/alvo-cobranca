'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'representative2',
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
        phone: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        address: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        role: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        store_id: {
          type: Sequelize.UUID,
          allowNull: false
        }
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('representative2');
  }
};
