const express = require('express');

// middlewares
const { validate } = require('../middlewares/body.middleware');
const {
  sellerRegisterBody,
  sellerLoginBody,
} = require('../middlewares/sellerBody.middleware')

// controlers sellers
const { 
  registerSeller,
  loginSeller,
  getSellerById,
  deleteSeller
} = require('../controllers/seller.controllers');

const router = express.Router();


// routers
router.post('/register', validate(sellerRegisterBody), registerSeller);
router.post('/login', validate(sellerLoginBody), loginSeller);
router.get('/seller/:id', getSellerById);
router.delete('/seller/delete/:id', deleteSeller);

module.exports = { sellersRouter: router }