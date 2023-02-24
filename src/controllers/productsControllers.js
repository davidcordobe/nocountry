const { default: mongoose } = require('mongoose');
const Products = require('../models/productsModels');


exports.crearProductos = async (req, res, next) => {

    try {
        const product = new Products(req.body);
        await product.save();
        res.send('Product Succes');

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProductos = async (req, res, next) => {

    try {
        const products = await Products.find();
        res.json(products)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarProducto = async (req, res, next) => {
    try {
        const { title, model, brand, price, description } = req.body;
        const isValidObjectId = mongoose.Types.ObjectId.isValid(req.params.id);
        if (!isValidObjectId) {
            return res.status(400).json({ msg: 'ID de producto inválido' });
        }
        const product = await Products.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ msg: 'No existe el producto' });
        }
        const updatedProduct = await Products.findOneAndUpdate(
            { _id: req.params.id },
            { $set: { title, model, brand, price, description } },
            { new: true }
        );
        res.json(updatedProduct);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};



exports.obtenerProducto = async (req, res, next) => {

    try {
        let products = await Products.findById(req.params.id);
        if (!products) {
            res.status(404).json({ msg: 'No existe el producto ' })
        }
        return res.json(products);

    } catch (error) {
        res.status(500).json({ msg: 'Hubo un error' });;
    }
}

exports.deleteProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ msg: 'ID de producto inválido' });
        }
        const objectId = mongoose.Types.ObjectId(id);
        const product = await Products.findById(objectId);
        if (!product) {
            return res.status(404).json({ msg: 'No existe el producto' });
        }
        await Products.deleteOne({ _id: objectId });
        res.json({ msg: 'Producto eliminado con éxito' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error del servidor');
    }
};



