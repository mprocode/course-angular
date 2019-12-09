var express = require('express');
var router = express.Router();
var TimelineController = require('../controllers/TimelineController.js');

router.get('/:user_id', TimelineController.list);
router.post('/', TimelineController.create);
router.put('/:id', TimelineController.update);

module.exports = router;

