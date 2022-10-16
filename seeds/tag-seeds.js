const { Tag } = require('../models');

const tagData = [
    {
        tag_name: 'hoody',
    },
    {
        tag_name: 'hoodie',
    },
    {
        tag_name: 'american',
    },
    {
        tag_name: 'premium',
    },
    {
        tag_name: 'baselayer',
    },
    {
        tag_name: 'top',
    },
    {
        tag_name: 'leggings',
    },
    {
        tag_name: 'shorts',
    },
    {
        tag_name: 'midlayer',
    },
    {
        tag_name: 'victory',
    },
    {
        tag_name: 'jacket',
    },
    {
        tag_name: 'green',
    },
    {
        tag_name: 'black',
    },
    {
        tag_name: 'navy',
    },
    {
        tag_name: 't-shirt',
    },
    {
        tag_name: 'vest',
    },
    {
        tag_name: 'bear',
    },
    {
        tag_name: 'sticker',
    },
    {
        tag_name: 'water bottle',
    },
    {
        tag_name: 'stainless steel',
    },
    {
        tag_name: 'clear',
    },
    {
        tag_name: 'car',
    },
    {
        tag_name: 'certificate',
    },
    {
        tag_name: 'canvas',
    },
    {
        tag_name: 'bag',
    },
    {
        tag_name: 'pencil sharpener',
    },
    {
        tag_name: 'badge',
    },
    {
        tag_name: 'magnet',
    },
    {
        tag_name: 'pennant',
    },
    {
        tag_name: 'travel',
    },
    {
        tag_name: 'umbrella',
    },
    {
        tag_name: 'hat',
    },
    {
        tag_name: 'cap',
    },
    {
        tag_name: 'scarf',
    },
    {
        tag_name: 'men',
    },
    {
        tag_name: 'women',
    },
    {
        tag_name: 'unisex',
    },
    {
        tag_name: 'large',
    },
    {
        tag_name: 'small',
    },
    {
        tag_name: 'mug',
    },
    {
        tag_name: 'enamel',
    },
    {
        tag_name: 'bear',
    },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
