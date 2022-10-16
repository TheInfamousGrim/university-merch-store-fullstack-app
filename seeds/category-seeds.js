const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Hoodies',
    },
    {
        category_name: 'Player Layer',
    },
    {
        category_name: 'For The Gym',
    },
    {
        category_name: 'Gifts',
    },
    {
        category_name: 'Headwear',
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;