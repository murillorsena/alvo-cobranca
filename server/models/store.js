const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL);

const store = sequelize.define(
    'store2',
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
        email: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        phone: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
);

module.exports = store;
