var express = require('express');
var router = express.Router();
var PhotosController = require('../controllers/PhotosController.js');

router.get('/:album_id', PhotosController.getByAlbum);
router.post('/', PhotosController.create);
router.put('/:id', PhotosController.update);

module.exports = router;
