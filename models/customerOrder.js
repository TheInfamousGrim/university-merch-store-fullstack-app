// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class CustomerOrder extends Model {}

// set up fields and rules for Product model
CustomerOrder.init(
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
        payment_method: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isDecimal: true,
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'customer_order',
    }
);

module.exports = CustomerOrder;
