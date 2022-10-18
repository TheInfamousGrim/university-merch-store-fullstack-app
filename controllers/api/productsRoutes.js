const router = require('express').Router();
const { Product, Category, Tag } = require('../../models');

// The `/api/products` endpoint

// GET all products
router.get('/', async (req, res) => {
    // find all products
    try {
        const productData = await Product.findAll({ include: ({ model: Category }, { model: Tag }) });
        res.status(200).json(productData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a product by it's 'id' value
router.get('/:id', async (req, res) => {
    // find a single product by its `id`
    try {
        const productData = await Product.findByPk(req.params.id, { include: ({ model: Category }, { model: Tag }) });
        if (!productData) {
            res.status(404).json({ message: 'No product found with this id!' });
            return;
        }
        res.status(200).json(productData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
