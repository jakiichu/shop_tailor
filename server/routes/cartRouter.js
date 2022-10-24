const Router = require('express')
const router = new Router()
const CartController = require('../controllers/cartController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', CartController.create)
router.get('/',CartController.getAll)
router.get('/:cartId', authMiddleware, CartController.getOne)
router.delete('/:id',CartController.delete)

module.exports = router