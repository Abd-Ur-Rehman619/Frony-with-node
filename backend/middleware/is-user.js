const users = require("../models/users");
const jwt = require("jsonwebtoken");
exports.isUser = (req, res, next) => {
  users.findById(req.userId).then((user) => {
    req.user = user;
    next();
  });
};
