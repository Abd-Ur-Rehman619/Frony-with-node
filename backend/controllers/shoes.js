const Shoes = require("../models/shoes");

exports.getShoes = async (req, res, next) => {
  const shoes = await Shoes.find();
  res.status(200).json(shoes);
};
