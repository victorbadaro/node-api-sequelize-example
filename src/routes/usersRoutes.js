const { Router } = require('express');
const UserController = require('../controller/UserController');

const router = Router();

router.get('/', UserController.index);
router.post('/', UserController.create);
router.get('/:id', UserController.find);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

module.exports = router;