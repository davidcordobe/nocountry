const Products = require('../models/productsModels');

class Product {

    async findAll(req, res, next) {
        try {
            const products = await Products.find().lean();
            res.status(200).json({
                status: 'success',
                data: {
                    products
                }
            });
        } catch (error) {
            res.status(500).json({
                status: 'fail',
                message: error.message
            });
        }
    }

    async create(req, res, next) {
        try {
            const newProduct = new Products(req.body);
            await newProduct.save();
            res.status(201).json({
                status: 'success',
                data: {
                    product: newProduct
                }
            });
        } catch (error) {
            res.status(500).json({
                status: 'fail',
                message: error.message
            });
        }
    }

    async filter(req, res, next) {
        const { category, model, brand, minPrice, maxPrice } = req.query;
        let filter = {};

        if (category) {
            filter.category = category;
        }
        if (model) {
            filter.model = model;
        }
        if (brand) {
            filter.brand = brand;
        }
        if (minPrice && maxPrice) {
            filter.price = { $gte: minPrice, $lte: maxPrice };
        } else if (minPrice) {
            filter.price = { $gte: minPrice };
        } else if (maxPrice) {
            filter.price = { $lte: maxPrice };
        }

        try {
            const filteredProducts = await Products.find(filter).lean();
            res.status(200).json({
                status: 'success',
                data: {
                    products: filteredProducts
                }
            });
        } catch (error) {
            res.status(500).json({
                status: 'fail',
                message: error.message
            });
        }
    }

    async delete(req, res, next) {
        const { id } = req.params;
        try {
            const deletedProduct = await Products.findOneAndRemove({ _id: id });
            res.status(200).json({
                status: 'success',
                message: 'Producto eliminado exitosamente',
                data: {
                    product: deletedProduct
                }
            });
        } catch (error) {
            res.status(500).json({
                status: 'fail',
                message: error.message
            });
        }
    }

    async update(req, res, next) {
        const { id } = req.params;
        try {
            const updatedProduct = await Products.findOneAndUpdate({ _id: id }, req.body, { new: true });
            res.status(200).json({
                status: 'success',
                message: 'Producto actualizado exitosamente',
                data: {
                    product: updatedProduct
                }
            });
        } catch (error) {
            res.status(500).json({
                status: 'fail',
                message: error.message
            });
        }
    }
}

module.exports = new Product();
