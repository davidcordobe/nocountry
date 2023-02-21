// utils
const AppError = require('../utils/AppError');
const tryCatch = require('../utils/tryCatch');
const { tokenSing } = require('../utils/generateToken');

// bycript
const bcrypt = require('bcrypt');

// models
const Seller = require('../models/sellerModels');

exports.registerSeller = tryCatch(async (req, res, next) => { 
  const { name, email, password } = req.body;
  const hashedPassword = await bycript.hash(password, 12);
  const seller = await Seller.create({
    name,
    email,
    password: hashedPassword
  });

  if (!seller) {
    return next(new AppError('Seller not created', 400));
  }

  seller.save();

  seller.password = undefined;

   return res.status(201).json({
    status: 'success',
    data: {
      seller
    }
  });
});

exports.loginSeller = tryCatch(async (req, res, next) => { 
  const { email, password } = req.body;

  const seller = await Seller.findOne({ email });

  if (!seller) {
    return next(new AppError('Invalid email or password', 400));
  }

  // compare password
  const isMatch = await bycript.compare(password, seller.password);

  if (!isMatch) { 
    return next(new AppError('Invalid email or password', 400));
  };

  // sign toke
  const token = tokenSing({ id: seller._id, email });

  return res.status(200).json({
    status: 'success',
    data: {
      token,
      seller
    },
    message: 'Login success'
  })
});

exports.getSellerById = tryCatch(async (req, res, next) => { 
  const seller = await Seller.findById(req.params.id);

  if (!seller) {
    return next(new AppError('Seller not found', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      seller
    }
  });
});

exports.deleteSeller = tryCatch(async (req, res, next) => { 
  const seller = await Seller.findByIdAndDelete(req.params.id);

  if (!seller) {
    return next(new AppError('Seller not found', 404));
  }

  return res.status(204).json({
    status: 'success',
    data: null
  });
});