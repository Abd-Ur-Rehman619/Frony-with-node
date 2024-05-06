const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const { body } = require("express-validator");
const Users = require("../models/users");

router.post(
  "/signup",
  [
    body("name")
      .trim()
      .isLength({ min: 5 })
      .withMessage("Name must be at least 5 characters long"),
    body("email")
      .isEmail()
      .withMessage("Invalid email address")
      .normalizeEmail()
      .custom(async (value) => {
        const user = await Users.findOne({ email: value });
        if (user) {
          throw new Error("Email already exists");
        }
      }),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
      )
      .withMessage(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
  ],
  authController.signUp
);
router.post(
  "/login",
  [
    body("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Invalid email address"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  authController.logIn
);

module.exports = router;
