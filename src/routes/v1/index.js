const express = require('express');
const Usercontroller = require('../../controllers/user-controller');
const { AuthRequestValidator } = require('../../middlewares/index');

const router = express.Router();
router.post('/signup', AuthRequestValidator.validateUserAuth, Usercontroller.create);
router.post('/signin', AuthRequestValidator.validateUserAuth, Usercontroller.signIn);
router.get('/isAuthenticated', Usercontroller.isAuthenticated);
router.get('/isAdmin', AuthRequestValidator.validateAdminRequest, Usercontroller.isAdmin);

module.exports = router; 