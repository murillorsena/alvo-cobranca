const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL);

const collectionAction = sequelize.define(
    'collection_action2', 
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        type: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        created_at: {
            type: DataTypes.TIMESTAMP,
            allowNull: false
        },
        updated_at: {
            type: DataTypes.TIMESTAMP,
            allowNull: false
        },
        store_id: {
            type: DataTypes.TIMESTAMP,
            allowNull: false
        },
        user_id: {
            type: DataTypes.TIMESTAMP,
            allowNull: false
        }
    }, 
    {
        timestamps: true
    }
)

module.exports = collectionAction;
