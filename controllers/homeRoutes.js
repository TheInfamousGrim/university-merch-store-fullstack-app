const router = require('express').Router();
const { Op } = require('sequelize');
const { User, Product } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    if (req.session.logged_in) {
        try {
            // get the product data
            const productData = await Product.findAll();

            // Serialize data so the template engine can read it
            const products = productData.map((productItem) => productItem.get({ plain: true }));

            res.render('homepage', {
                products,
                logged_in: req.session.logged_in,
            });
        } catch (err) {
            res.status(500).json(err);
        }
    }
    res.render('login');
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
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;
