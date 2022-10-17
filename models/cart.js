const { Model, DataTypes } = require('sequelize');

// Import db
const sequelize = require('../config/connection');

// Initialize cart model (table) by extending off Sequilize's Model Class
class Cart extends Model {}

// Set up fields and rules for Cart model
Cart.init(
    {
        // define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'product',
                key: 'id',
            },
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'cart',
    }
);

module.exports = Cart;
