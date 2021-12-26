const { Router } = require('express');
const usersRouter = require('./usersRoutes');
const productsRouter = require('./productsRoutes');

const router = Router();

router.use('/users', usersRouter);
router.use('/products', productsRouter);

module.exports = router;