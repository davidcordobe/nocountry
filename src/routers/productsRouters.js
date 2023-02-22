const express = require('express');
const router = express.Router();

// middelwares
const {
  producRegisterBody
} = require('../middlewares/productBody.middleware')
const {
  validate
} = require('../middlewares/body.middleware')

const {
  obtenerProductos,
  actualizarProducto,
  crearProductos,
  deleteProduct
} = require('../controllers/productsControllers')

router.get('/allproducts', obtenerProductos)
router.post('/register', validate(producRegisterBody), crearProductos);
router.put('/update/:id', actualizarProducto);
router.delete('/delete/:id', deleteProduct);



module.exports = { productRouter: router };