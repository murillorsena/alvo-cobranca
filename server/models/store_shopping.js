const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL);

const storeShopping = sequelize.define(
    'store_shopping',
      {
        store_id: {
          type: DataTypes.UUID,
          allowNull: false
        },
        shopping_id: {
          type: DataTypes.UUID,
          allowNull: false
        }
      },
    {
        timestamps: false
    }
);

module.exports = storeShopping;
