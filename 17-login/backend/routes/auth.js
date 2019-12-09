var express = require('express');
var router = express.Router();
var Auth = require('../controllers/AuthController.js');

router.post('/login', Auth.login);
router.post('/register', Auth.register);

router.use(Auth.check_token);
router.get('/user', Auth.user_data);

module.exports = router
