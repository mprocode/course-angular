var express = require('express');
var router  = express.Router();
var DepartmentController = require('../controllers/DepartmentController.js');

router.get('/departments', DepartmentController.all);
router.post('/departments', DepartmentController.add);
router.delete('/departments/:id', DepartmentController.delete);
router.patch('/departments/:id', DepartmentController.update);
router.get('/departments/products/:id', DepartmentController.products);

module.exports = router

