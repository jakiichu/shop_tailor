const {Product} = require('../models/models')
const uuid = require('uuid')
const path = require('path')
const  ApiError = require('../error/ApiError')
class ProductController{
    async create(req, res, next){
        try{
            const {name, description, price, categoryId, sizeId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname,'..','static',fileName))
            const product = await Product.create({name, price, description, categoryId, sizeId, img: fileName})
            return res.json(product)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res){
     let {categoryId, sizeId, limit, page} = req.query
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit
        let products;
        if(!categoryId && !sizeId){
            products = await Product.findAndCountAll({limit, offset})
        }

        if(categoryId && !sizeId){
            products = await Product.findAndCountAll({where:{categoryId}, limit, offset})

        }

        if(!categoryId && sizeId){
            products = await Product.findAndCountAll({where:{sizeId}, limit, offset})

        }

        if(categoryId && sizeId){
            products = await Product.findAndCountAll({where:{sizeId, categoryId}, limit, offset})

        }
        return res.json(products)
    }

    async getOne(req, res){
        const {id} = req.params
        const product = await Product.findOne(
            {where: {id}}
        )
        return res.json(product)
    }

    async delete(req, res){
        const {id} = req.params
        const product = await Product.destroy(
            {where: {id}}
        )
        return res.json(product)
    }
}

module.exports = new ProductController()