const express = require('express');
const Usercontroller = require('../../controllers/user-controller');
const { AuthRequestValidator } = require('../../middlewares/index');

const router = express.Router();
router.post('/signup', AuthRequestValidator.validateUserAuth, Usercontroller.create);
router.post('/signin', AuthRequestValidator.validateUserAuth, Usercontroller.signIn);

module.exports = router; 