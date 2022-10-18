const router = require('express').Router();
const { Op } = require('sequelize');
const { User, Product, Category, Tag } = require('../models');

// GET a product by it's 'id' value
router.get('/:id', async (req, res) => {
    // find a single product by its `id`
    try {
        const productData = await Product.findByPk(req.params.id, { include: ({ model: Category }, { model: Tag }) });
        if (!productData) {
            res.status(404).json({ message: 'No product found with this id!' });
            return;
        }
        res.render('productpage', {
            productData,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

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
