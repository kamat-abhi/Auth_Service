const express = require('express');
const Usercontroller = require('../../controllers/user-controller');

const router = express.Router();

router.post('/signup', Usercontroller.create);

module.exports = router; 