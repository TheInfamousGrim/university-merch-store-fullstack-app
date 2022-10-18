const router = require('express').Router();
const { User, Product } = require('../models');

router.get('/', async (req, res) => {
    try {
        // get the product data
        const productData = await Product.findAll();

        // Serialize data so the template engine can read it
        const products = productData.map((productItem) => productItem.get({ plain: true }));

        res.render('homepage', {
            products,
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
