const express = require('express');
const router = express.Router();

// Middlewares
const { productRegisterBody } = require('../middlewares/productBody.middleware');
const { validate } = require('../middlewares/body.middleware');

// Controllers
const {
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productsControllers');

// Register a product
router.patch('/register', validate(productRegisterBody), createProduct);

// Update a product
router.put('/update/:id', updateProduct);

// Delete a product
router.delete('/delete/:id', deleteProduct);

// Export the router
module.exports = router;

