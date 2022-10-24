const Router = require('express')
const router = new Router()
const categoryRouter = require('./categoryRouter')
const favoriteRouter = require('./favoriteRouter')
const productRouter = require('./productRouter')
const sizeRouter = require('./sizeRouter')
const userRouter = require('./userRouter')
const cartRouter = require('./cartRouter')



router.use('/user', userRouter)
router.use('/product',productRouter)
router.use('/category', categoryRouter)
router.use('/favorite',favoriteRouter)
router.use('/size', sizeRouter)
router.use('/cart', cartRouter)

module.exports = router