const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL);

const debit = sequelize.define(
    'debit',
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        amount: {
            type: DataTypes.NUMERIC,
            allowNull: false
        },
        due_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        compensation_date: {
            type: DataTypes.DATE
        },
        store_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        shopping_id: {
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

module.exports = debit;
