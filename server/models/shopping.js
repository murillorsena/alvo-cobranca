const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL);

const shopping = sequelize.define(
    'shopping',
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        code: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)

module.exports = shopping;
