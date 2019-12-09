var express = require('express');
var router = express.Router();
var AlbumController = require('../controllers/AlbumController.js');

router.get('/:user_id', AlbumController.list);
router.post('/', AlbumController.create);
router.put('/:id', AlbumController.update);

module.exports = router;
