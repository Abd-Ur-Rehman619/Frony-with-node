const Orders = require("../models/orders");

exports.postOrder = (req, res, next) => {
  const { address, town, phone } = req.body;
  req.user
    .populate("cart.items.productId")
    .then((user) => {
      const products = user.cart.items.map((i) => {
        return { quantity: i.quantity, product: { ...i.productId._doc } };
      });
      const order = new Orders({
        user: {
          name: req.user.name,
          userId: req.user,
          address: address,
          town: town,
          phone: phone,
        },
        products: products,
      });
      return order.save();
    })
    .then((result) => {
      return req.user.clearCart();
    })
    .then(() => {
      res.json("Orders been placed");
    })
    .catch((err) => console.log(err));
};

exports.getOrders = (req, res, next) => {
  Orders.find({ "user.userId": req.user._id })
    .then((orders) => {
      res.json(orders);
    })
    .catch((err) => console.log(err));
};
