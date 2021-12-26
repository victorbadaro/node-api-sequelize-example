const { Router } = require('express');
const ProductController = require('../controller/ProductController');

const router = Router();

router.get('/', ProductController.index);
router.post('/', ProductController.create);
router.get('/:id', ProductController.find);
router.put('/:id', ProductController.update);
router.delete('/:id', ProductController.delete);

module.exports = router;