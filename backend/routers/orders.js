const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/orders");

router.get("/orders", ordersController.getOrders);
router.post("/orders", ordersController.postOrder);

module.exports = router;
