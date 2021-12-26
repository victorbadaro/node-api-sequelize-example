const { Router } = require('express');
const usersRouter = require('./usersRoutes');

const router = Router();

router.use('/users', usersRouter);

module.exports = router;