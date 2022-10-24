const {Cart, Product} = require('../models/models')
const {Cart_product} = require('../models/models')
const  ApiError = require('../error/ApiError')
const jwt = require("jsonwebtoken");
class ProductController{
    async create(req, res){
        const {cartId, productId} = req.body
        const cart_product = await Cart_product.create({cartId, productId})
        return res.json(cart_product)
    }

    async getOne(req, res){
        const {cartId} = req.params
        const cart_product = await Cart_product.findOne({where: {cartId:req.user.id}})
        return res.json(cart_product)
    }

    async getAll(req, res){
        const cart_product = await Cart_product.findAll()
        return res.json(cart_product)
    }

    async delete(req, res){
        const {id} = req.params
        const cart_product = await Cart_product.destroy(
            {where: {id}}
        )
        return res.json(cart_product)
    }
}

module.exports = new ProductController()