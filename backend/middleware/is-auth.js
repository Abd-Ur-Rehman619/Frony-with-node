const users = require("../models/users");
const jwt = require("jsonwebtoken");
exports.isAuth = (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    return res.json("No Auth Header");
  }
  const token = authHeader.split(" ")[1];
  let decodeToken;
  try {
    decodeToken = jwt.verify(token, process.env.USER_SECREAT_KEY);
  } catch (err) {
    console.log(err);
  }

  if (!decodeToken) {
    return res.status(401).json("Unauthorized!");
  }
  req.userId = decodeToken.userId;
  next();
};
