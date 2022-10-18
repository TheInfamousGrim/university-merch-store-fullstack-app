const router = require('express').Router();
const { Op } = require('sequelize');
const { User, Product } = require('../models');

router.get('/:name', async (req, res) => {
    try {
        console.log(req.params.name);
        const productData = await Product.findAll({
            where: {
                name: {
                    [Op.substring]: req.params.name,
                },
            },
        });

        if (!productData) {
            res.status(404).json({ message: 'No products with this id!' });
            return;
        }

        const products = productData.map((productItem) => productItem.get({ plain: true }));
        console.log(products);
        res.render('productpage', {
            products,
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
