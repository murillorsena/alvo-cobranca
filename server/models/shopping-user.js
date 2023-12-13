const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL);

const shoppingUser = sequelize.define(
    'shopping_user',
      {
        shoppping_id: {
          type: DataTypes.UUID,
          allowNull: false
        },
        user_id: {
          type: DataTypes.UUID,
          allowNull: false
        }
      },
    {
        timestamps: false
    }
);

module.exports = shoppingUser;
