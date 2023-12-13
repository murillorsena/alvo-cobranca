const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL);

const collectionAction = sequelize.define(
    'collection_action', 
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
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: {
            type: DataTypes.DATE
        },
        store_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false
        }
    }, 
    {
        timestamps: true
    }
)

module.exports = collectionAction;
