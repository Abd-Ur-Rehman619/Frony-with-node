const express = require("express");
const router = express.Router();
const shoesController = require("../controllers/shoes");

router.get("/products", shoesController.getShoes);

module.exports = router;
