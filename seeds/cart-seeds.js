const { Cart } = require('../models');

const cartData = [
    {
        user_id: 1,
        product_id: 3,
        quantity: 2,
        order_id: 1,
    },
    {
        user_id: 1,
        product_id: 10,
        quantity: 1,
        order_id: 1,
    },
    {
        user_id: 2,
        product_id: 14,
        quantity: 2,
        order_id: 2,
    },
    {
        user_id: 2,
        product_id: 16,
        quantity: 2,
        order_id: 2,
    },
];

const seedCarts = () => Cart.bulkCreate(cartData);

module.exports = seedCarts;
