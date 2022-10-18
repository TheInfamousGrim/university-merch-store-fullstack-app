const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const productPageRoutes = require('./productPageRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/product', productPageRoutes);

module.exports = router;
