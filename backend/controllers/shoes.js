const Shoes = require("../models/shoes");
const filterShoes = require("../models/filterShoes");

exports.getShoes = async (req, res, next) => {
  const shoes = await Shoes.find();
  res.status(200).json(shoes);
};
exports.getShoe = async (req, res, next) => {
  const shoeId = req.params.shoeId;
  Shoes.findById(shoeId)
    .then((shoe) => {
      res.status(200).json(shoe);
    })
    .catch((err) => {
      console.log("Was not Able to fetch product");
    });
};
exports.getWomenShoes = async (req, res, next) => {
  const shoes = await filterShoes("WOMEN");
  res.status(200).json(shoes);
};
exports.getMenShoes = async (req, res, next) => {
  const shoes = await filterShoes("MEN");
  res.status(200).json(shoes);
};
exports.getKidsShoes = async (req, res, next) => {
  const shoes = await filterShoes("KIDS");
  res.status(200).json(shoes);
};
exports.getHeelsShoes = async (req, res, next) => {
  const shoes = await filterShoes("HEELS");
  res.status(200).json(shoes);
};
exports.getLoafersShoes = async (req, res, next) => {
  const shoes = await filterShoes("LOAFERS");
  res.status(200).json(shoes);
};
exports.getSandalsShoes = async (req, res, next) => {
  const shoes = await filterShoes("SANDALS");
  res.status(200).json(shoes);
};
exports.getCasualShoes = async (req, res, next) => {
  const shoes = await filterShoes("CASUAL");
  res.status(200).json(shoes);
};
exports.getFootballShoes = async (req, res, next) => {
  const shoes = await filterShoes("FOOTBALL");
  res.status(200).json(shoes);
};
exports.getFormalShoes = async (req, res, next) => {
  const shoes = await filterShoes("FORMAL");
  res.status(200).json(shoes);
};
exports.getRunningShoes = async (req, res, next) => {
  const shoes = await filterShoes("RUNNING");
  res.status(200).json(shoes);
};
