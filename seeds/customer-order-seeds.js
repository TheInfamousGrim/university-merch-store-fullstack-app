const { CustomerOrder } = require('../models');

const orderData = [
    {
        user_id: 1,
        payment_method: 'Stripe',
        total: 113.0,
    },
    {
        user_id: 2,
        payment_method: 'Stripe',
        total: 128.0,
    },
];

const seedOrders = () => CustomerOrder.bulkCreate(orderData);

module.exports = seedOrders;
