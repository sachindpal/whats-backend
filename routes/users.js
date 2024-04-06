var express = require('express');
const { users } = require('../users');
var router = express.Router();

/* GET users listing. */
router.get('/userList', users.userList);
router.post('/messageList', users.messageList);
router.post('/login', users.login);

module.exports = router;
