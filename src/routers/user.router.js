const express = require('express');

const {
  loginUser,
  registerUser
} = require('../controllers/user.controller')

// ----- middlewares ----- //
const { validate } = require('../middlewares/body.middleware');
const { 
  userRegisterBody,
  userLoginBody
} = require('../middlewares/userBody.middleware');

const router = express.Router();

router.post('/login', validate(userLoginBody), loginUser);
router.post('/register', validate(userRegisterBody), registerUser);

module.exports = { userRouter: router }; 