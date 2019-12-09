var express = require('express');
var router  = express.Router();
var ProductController = require('../controllers/ProductController.js');

router.get('/products', ProductController.all);
router.post('/products', ProductController.add);
router.delete('/products/:id', ProductController.delete);
router.patch('/products/:id', ProductController.update);

module.exports = router

