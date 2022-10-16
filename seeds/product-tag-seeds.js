const { ProductTag } = require('../models');

const productTagData = [
    {
        product_id: 1,
        tag_id: 1,
    },
    {
        product_id: 1,
        tag_id: 2,
    },
    {
        product_id: 1,
        tag_id: 3,
    },
    {
        product_id: 2,
        tag_id: 1,
    },
    {
        product_id: 2,
        tag_id: 2,
    },
    {
        product_id: 2,
        tag_id: 5,
    },
    {
        product_id: 3,
        tag_id: 1,
    },
    {
        product_id: 3,
        tag_id: 2,
    },
    {
        product_id: 3,
        tag_id: 4,
    },
    {
        product_id: 4,
        tag_id: 6,
    },
    {
        product_id: 4,
        tag_id: 7,
    },
    {
        product_id: 4,
        tag_id: 13,
    },
    {
        product_id: 4,
        tag_id: 36,
    },
    {
        product_id: 5,
        tag_id: 6,
    },
    {
        product_id: 5,
        tag_id: 8,
    },
    {
        product_id: 5,
        tag_id: 14,
    },
    {
        product_id: 5,
        tag_id: 36,
    },
    {
        product_id: 6,
        tag_id: 9,
    },
    {
        product_id: 6,
        tag_id: 14,
    },
    {
        product_id: 6,
        tag_id: 36,
    },
    {
        product_id: 7,
        tag_id: 7,
    },
    {
        product_id: 7,
        tag_id: 10,
    },
    {
        product_id: 7,
        tag_id: 14,
    },
    {
        product_id: 7,
        tag_id: 36,
    },
    {
        product_id: 8,
        tag_id: 1,
    },
    {
        product_id: 8,
        tag_id: 11,
    },
    {
        product_id: 8,
        tag_id: 14,
    },
    {
        product_id: 8,
        tag_id: 16,
    },
    {
        product_id: 8,
        tag_id: 36,
    },
    {
        product_id: 9,
        tag_id: 7,
    },
    {
        product_id: 9,
        tag_id: 11,
    },
    {
        product_id: 9,
        tag_id: 13,
    },
    {
        product_id: 9,
        tag_id: 16,
    },
    {
        product_id: 9,
        tag_id: 36,
    },
    {
        product_id: 10,
        tag_id: 12,
    },
    {
        product_id: 10,
        tag_id: 13,
    },
    {
        product_id: 10,
        tag_id: 36,
    },
    {
        product_id: 11,
        tag_id: 6,
    },
    {
        product_id: 11,
        tag_id: 7,
    },
    {
        product_id: 11,
        tag_id: 13,
    },
    {
        product_id: 11,
        tag_id: 37,
    },
    {
        product_id: 12,
        tag_id: 6,
    },
    {
        product_id: 12,
        tag_id: 8,
    },
    {
        product_id: 12,
        tag_id: 14,
    },
    {
        product_id: 12,
        tag_id: 37,
    },
    {
        product_id: 13,
        tag_id: 9,
    },
    {
        product_id: 13,
        tag_id: 14,
    },
    {
        product_id: 13,
        tag_id: 37,
    },
    {
        product_id: 14,
        tag_id: 7,
    },
    {
        product_id: 14,
        tag_id: 10,
    },
    {
        product_id: 14,
        tag_id: 14,
    },
    {
        product_id: 14,
        tag_id: 37,
    },
    {
        product_id: 15,
        tag_id: 1,
    },
    {
        product_id: 15,
        tag_id: 11,
    },
    {
        product_id: 15,
        tag_id: 14,
    },
    {
        product_id: 15,
        tag_id: 16,
    },
    {
        product_id: 15,
        tag_id: 37,
    },
    {
        product_id: 16,
        tag_id: 7,
    },
    {
        product_id: 16,
        tag_id: 11,
    },
    {
        product_id: 16,
        tag_id: 13,
    },
    {
        product_id: 16,
        tag_id: 16,
    },
    {
        product_id: 16,
        tag_id: 37,
    },
    {
        product_id: 17,
        tag_id: 12,
    },
    {
        product_id: 17,
        tag_id: 13,
    },
    {
        product_id: 17,
        tag_id: 37,
    },
    {
        product_id: 18,
        tag_id: 16,
    },
    {
        product_id: 18,
        tag_id: 38,
    },
    {
        product_id: 19,
        tag_id: 9,
    },
    {
        product_id: 19,
        tag_id: 15,
    },
    {
        product_id: 20,
        tag_id: 17,
    },
    {
        product_id: 20,
        tag_id: 37,
    },
    {
        product_id: 21,
        tag_id: 25,
    },
    {
        product_id: 21,
        tag_id: 26,
    },
    {
        product_id: 22,
        tag_id: 19,
    },
    {
        product_id: 22,
        tag_id: 23,
    },
    {
        product_id: 22,
        tag_id: 39,
    },
    {
        product_id: 23,
        tag_id: 19,
    },
    {
        product_id: 23,
        tag_id: 23,
    },
    {
        product_id: 23,
        tag_id: 40,
    },
    {
        product_id: 24,
        tag_id: 24,
    },
    {
        product_id: 25,
        tag_id: 20,
    },
    {
        product_id: 25,
        tag_id: 22,
    },
    {
        product_id: 26,
        tag_id: 27,
    },
    {
        product_id: 27,
        tag_id: 28,
    },
    {
        product_id: 28,
        tag_id: 41,
    },
    {
        product_id: 28,
        tag_id: 42,
    },
    {
        product_id: 29,
        tag_id: 43,
    },
    {
        product_id: 30,
        tag_id: 29,
    },
    {
        product_id: 31,
        tag_id: 30,
    },
    {
        product_id: 32,
        tag_id: 20,
    },
    {
        product_id: 32,
        tag_id: 21,
    },
    {
        product_id: 33,
        tag_id: 13,
    },
    {
        product_id: 33,
        tag_id: 20,
    },
    {
        product_id: 33,
        tag_id: 31,
    },
    {
        product_id: 34,
        tag_id: 32,
    },
    {
        product_id: 35,
        tag_id: 33,
    },
    {
        product_id: 36,
        tag_id: 34,
    },
    {
        product_id: 37,
        tag_id: 35,
    },
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
