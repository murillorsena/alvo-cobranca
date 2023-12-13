'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'collection_action', 
      {
        id: {
          type: Sequelize.UUID,
          allowNull: false,
          primaryKey: true
        },
        type: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        content: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE
        },
        store_id: {
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
    await queryInterface.dropTable('collection_action');
  }
};
