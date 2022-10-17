const router = require('express').Router();

const categoryRoutes = require('./categoryRoutes');
const userRoutes = require('./userRoute');
const productRoutes = require('./productsRoutes');

router.use('/categories', categoryRoutes);
router.use('/users', userRoutes);
router.use('/products', productRoutes);

module.exports = router;
