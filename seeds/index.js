// Import all seed data from partial seed files
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');
const userData = require('./userData.json');

const sequelize = require('../config/connection');
const User = require('../models/user');

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

    process.exit(0);
};

seedAll();
