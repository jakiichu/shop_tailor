const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    username:{type:DataTypes.STRING,unique: true,},
    email:{type:DataTypes.STRING,unique: true,},
    password:{type:DataTypes.STRING,},
    role:{type:DataTypes.STRING, defaultValue:'USER'},
})

const Cart = sequelize.define('cart',{
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
})

const Cart_product = sequelize.define('cart_product',{
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
})

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.TEXT, },
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Size = sequelize.define('size', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})
const Favorite = sequelize.define('favorite', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},//две связи юзер и товар
})

User.hasOne(Cart)
Cart.belongsTo(User)

User.hasMany(Favorite)
Favorite.belongsTo(User)

Cart.hasMany(Cart_product)
Cart_product.belongsTo(Cart)

Cart.belongsToMany(Product, {through: 'cartProducts',foreignKey: 'cartId'})

Category.hasMany(Product)
Product.belongsTo(Category)

Size.hasMany(Product)
Product.belongsTo(Size)

Product.hasMany(Cart_product)
Cart_product.belongsTo(Product)

module.exports = {
    User,
    Cart,
    Cart_product,
    Product,
    Size,
    Category,
    Favorite
}