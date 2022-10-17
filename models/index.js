// import models
const Cart = require('./cart');
const Category = require('./category');
const CustomerOrder = require('./customerOrder');
const Product = require('./product');
const ProductTag = require('./productTag');
const Tag = require('./tags');
const User = require('./user');

/* -------------------------------------------------------------------------- */
/*                  products, categories and tag associations                 */
/* -------------------------------------------------------------------------- */

// Products belongsTo Category
Product.belongsTo(Category, {
    foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
    foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
    through: ProductTag,
    foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: 'tag_id',
});

/* -------------------------------------------------------------------------- */
/*                      user, order and cart associations                     */
/* -------------------------------------------------------------------------- */

/* -------------------------- cart associations -------------------------- */

// Products belongsTo Carts
Product.belongsTo(Cart, {
    foreignKey: 'cart_id',
});

// Carts hasMany Products
Cart.hasMany(Product, {
    foreignKey: 'cart_id',
});

/* ---------------------------- user associations --------------------------- */

// Cart belongsTo one user
Cart.belongsTo(User, {
    foreignKey: 'user_id',
});

// User hasMany carts
User.hasMany(Cart, {
    foreignKey: 'user_id',
});

// Order belongsTo one user
CustomerOrder.belongsTo(User, {
    foreignKey: 'user_id',
});

// User hasMany orders
User.hasMany(CustomerOrder, {
    foreignKey: 'user_id',
});

// /* --------------------------- order associations --------------------------- */

// Cart belongsTo one order
Cart.belongsTo(CustomerOrder, {
    foreignKey: 'order_id',
});

// Order hasMany carts
CustomerOrder.hasMany(Cart, {
    foreignKey: 'order_id',
});

module.exports = {
    Cart,
    Category,
    CustomerOrder,
    Product,
    ProductTag,
    Tag,
    User,
};
