const Router = require('express')
const router = new Router()
const FavoriteController = require('../controllers/favoriteController')


router.post('/',FavoriteController.create)
router.get('/',FavoriteController.getAll)
router.get('/:id/:productId',FavoriteController.get)
router.get('/:id',FavoriteController.getUserFavorites)
router.delete('/:id',FavoriteController.delete)

module.exports = router