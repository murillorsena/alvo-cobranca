'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'debit',
      {
        id: {
          type: Sequelize.UUID,
          allowNull: false,
          primaryKey: true
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        amount: {
          type: Sequelize.NUMERIC,
          allowNull: false
        },
        due_date: {
          type: Sequelize.DATE,
          allowNull: false
        },
        compensation_date: {
          type: Sequelize.DATE
        },
        store_id: {
          type: Sequelize.UUID,
          allowNull: false
        },
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
    await queryInterface.dropTable('debit');
  }
};
