const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL);

const storeRepresentative = sequelize.define(
    'store_representative',
      {
        store_id: {
          type: DataTypes.UUID,
          allowNull: false
        },
        representative_id: {
          type: DataTypes.UUID,
          allowNull: false
        }
      },
    {
        timestamps: false
    }
);

module.exports = storeRepresentative;
