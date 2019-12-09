var express = require('express');
var router = express.Router();
var SharingController = require('../controllers/SharingController.js');

router.post('/', SharingController.create);
router.put('/share/:id', SharingController.newShare);
router.put('/like/:id', SharingController.newLike);
router.put('/removeshare/:id', SharingController.removeShare);
router.put('/removelike/:id', SharingController.removeLike);

module.exports = router;

