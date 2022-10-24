const Router = require('express')
const router = new Router()
const SizeController = require('../controllers/sizeController')

router.post('/',SizeController.create)
router.get('/',SizeController.getAll)
router.get('/:id',SizeController.get)

module.exports = router