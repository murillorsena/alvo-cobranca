const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL);

const representative = sequelize.define(
    'representative2',
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true
        },
        phone: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        role: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        store_id: {
            type: DataTypes.UUID,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
);

module.exports = representative;
