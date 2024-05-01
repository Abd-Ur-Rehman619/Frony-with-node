const express = require("express");
const router = express.Router();
const shoesController = require("../controllers/shoes");

router.get("/products", shoesController.getShoes);

router.get("/products/women", shoesController.getWomenShoes);
router.get("/products/men", shoesController.getMenShoes);
router.get("/products/kids", shoesController.getKidsShoes);
router.get("/products/heels", shoesController.getHeelsShoes);
router.get("/products/loafers", shoesController.getLoafersShoes);
router.get("/products/sandals", shoesController.getSandalsShoes);
router.get("/products/casual", shoesController.getCasualShoes);
router.get("/products/football", shoesController.getFootballShoes);
router.get("/products/formal", shoesController.getFormalShoes);
router.get("/products/running", shoesController.getRunningShoes);
router.get("/products/:shoeId", shoesController.getShoe);

module.exports = router;
