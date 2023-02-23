const { body } = require('express-validator');

// models (schemas)
const User = require('../models/usersModels');
const AppError = require('../utils/AppError.js');


exports.userRegisterBody = [
  body('name')
    .notEmpty()
    .withMessage('name is required')
    .isString()
    .withMessage('name must be a string'),
  body('lastName')
    .notEmpty()
    .withMessage('lastName is required')
    .isString()
    .withMessage('lastName must be a string'),
  body('nameUser')
    .notEmpty()
    .withMessage('nameUser is required')
    .isString()
    .withMessage('nameUser must be a string'),
  body('password')
    .notEmpty()
    .withMessage('password is required'),
  body('passwordConfirm').custom((value, { req }) => { 
    if (value !== req.body.password) {
      return new Error('Password confirmation does not match password');
    }
    return true;
  }),
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isString()
    .withMessage('email must be a string')
    .isEmail()
    .withMessage('email is not valid')
    .normalizeEmail()
    .custom( async(value, { req }) => { 
      const existinUser = await User.findOne({ email: value })
      if (existinUser) {
        throw new AppError('Email already registered')
      }
      return true
    }),
  body('photo')
    .notEmpty()
    .withMessage('photo is required')
    .isString()
    .withMessage('photo must be a string'),
  body('role')
    .notEmpty()
    .withMessage('role is required')
    .isString()
    .withMessage('role must be a string'),
];

exports.userLoginBody = [
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('email is not valid')
    .normalizeEmail(),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isString()
    .withMessage('Password is String')
]
