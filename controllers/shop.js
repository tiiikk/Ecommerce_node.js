const Product = require ('../models/product')

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'All products',
            path: '/products',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
}

exports.getProduct = (req, res, next) =>{
    const prodId = req.params.productId;
    Product.findById(prodId, product =>{
        console.log(product)
    })
    res.redirect('/')
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/'
        });
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Cart',
        path: '/cart',

    });
};

exports.postCart =  (req, res, next) => {
    const prodId = req.body.productId;
    console.log(prodId);
    res.redirect('/cart')
};

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'Orders',
        path: '/orders',

    });
};
exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        pageTitle: 'Checkout',
        path: '/checkout',

    });
};

