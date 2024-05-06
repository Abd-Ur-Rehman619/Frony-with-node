const shoes = require("./shoes");

async function filterShoes(shoeCategory) {
  let filteredProducts = [];
  if (
    shoeCategory === "WOMEN" ||
    shoeCategory === "MEN" ||
    shoeCategory === "KIDS"
  ) {
    filteredProducts = await shoes.find({ gender: shoeCategory }).exec();
  } else {
    filteredProducts = await shoes.find({ category: shoeCategory }).exec();
  }
  return filteredProducts;
}
module.exports = filterShoes;
