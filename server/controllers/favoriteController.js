const {Favorite} = require("../models/models");

class FavoriteController{
    async create(req, res){
        const {userId, productId} = req.body
        const favorite = await Favorite.create({userId, productId})
        return res.json(favorite)
    }
    async getAll(req, res){
        const favorite = await Favorite.findAll()
        return res.json(favorite)
    }
    async get(req, res){
        const {id, productId} = req.params
        const favorite = await Favorite.findAll({where:
                {userId:id,productId:productId}
        })
        return res.json(favorite)
    }
    async getUserFavorites(req, res){
        const {id} = req.params
        const favorite = await Favorite.findAll({where:
                {userId:id}
        })
        return res.json(favorite)
    }
    async delete(req, res){

    }
}

module.exports = new FavoriteController()