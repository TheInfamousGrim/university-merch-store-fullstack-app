// Import all seed data from partial seed files
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');
const seedOrders = require('./customer-order-seeds');
const seedCarts = require('./cart-seeds');

// Connect to db
const sequelize = require('../config/connection');
// Connect to User model
const User = require('../models/user');
const userData = require('./userData.json');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedCategories();
    console.log('\n----- CATEGORIES SEEDED -----\n');

    await seedProducts();
    console.log('\n----- PRODUCTS SEEDED -----\n');

    await seedTags();
    console.log('\n----- TAGS SEEDED -----\n');

    await seedProductTags();
    console.log('\n----- PRODUCT TAGS SEEDED -----\n');

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    console.log('\n----- USERS SEEDED -----\n');

    await seedOrders();
    console.log('\n----- CUSTOMER ORDERS SEEDED -----\n');

    await seedCarts();
    console.log('\n----- CARTS SEEDED -----\n');

    process.exit(0);
};

seedAll();
