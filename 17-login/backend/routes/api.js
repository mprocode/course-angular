var express = require('express');
var router  = express.Router();
var PersonController = require('../controllers/PersonController.js');
var ProductController = require('../controllers/ProductController.js');
var Auth = require('../controllers/AuthController.js');

router.use(Auth.check_token);

router.get('/people', PersonController.all);
router.get('/products', ProductController.all);

module.exports = router

