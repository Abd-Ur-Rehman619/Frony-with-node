const shoes = require("../models/shoes");

exports.getCart = (req, res, next) => {
  req.user
    .populate("cart.items.productId")
    .then((user) => {
      const products = user.cart.items;
      res.status(200).json(products);
    })
    .catch((err) => console.log(err));
};
exports.postCart = (req, res, next) => {
  const { productId } = req.body;
  shoes
    .findById(productId)
    .then((product) => {
      return req.user.addToCart(product);
    })
    .then((result) => {
      res.status(200).json("Product added succesfully");
    });
};
exports.postRemoveItemCart = (req, res, next) => {
  const { productId } = req.body;
  shoes
    .findById(productId)
    .then((product) => {
      return req.user.removeItemFromCart(product);
    })
    .then((result) => {
      res.status(200).json("Product Removed succesfully");
    });
};
exports.postCartDeleteProduct = (req, res, next) => {
  const { productId } = req.body;
  req.user
    .removeFromCart(productId)
    .then((result) => {
      res.status(200).json("Removed");
    })
    .catch((err) => console.log(err));
};
