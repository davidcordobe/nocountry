const { body } = require('express-validator');

// models
const Seller = require('../models/sellerModels');
const AppError = require('../utils/AppError.js');

exports.sellerRegisterBody = [
  body('name')
    .notEmpty()
    .withMessage('Name is required'),
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Email is invalid')
    .custom( async(value) => {
      const SellerExist = await Seller.findOne({ email: value })
      if (SellerExist) {
        return AppError('seller already exist', 400)
      }
      return true
    }),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isStrongPassword()
    .withMessage('Password is weak'),
  body('passowrdConfirm')
    .notEmpty()
    .withMessage('Password confirm is required')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        return AppError('password confirm is not match', 400)
      }
      return true
    }),
  body('role')
    .isString()
    .withMessage('Roles is String'),
  body('status')
    .isString()
    .withMessage('Status is String'),
]

exports.sellerLoginBody = [
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Email is invalid'),
]