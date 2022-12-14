const router = require('express').Router();

const categoryRoutes = require('./categoryRoutes');
const productRoutes = require('./productsRoutes');
const userRoutes = require('./UserRoute');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/users', userRoutes);

module.exports = router;
