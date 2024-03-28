const { validationResult } = require("express-validator");
const User = require("../models/users");
const { hash, compare } = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res, next) => {
  const { name, email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    return res.status(400).json({ errors: errorMessages });
  }
  const hashedPassword = await hash(password, 12);

  const newUser = new User({
    name: name,
    email: email,
    password: hashedPassword,
  });
  newUser
    .save()
    .then((savedUser) => {
      res.status(201).json({
        message: "User created successfully",
        user: savedUser,
      });
    })
    .catch((error) => {
      console.error("Error creating user:", error);
      res.status(500).json({
        error: "Internal server error",
      });
    });
};

exports.logIn = async (req, res, next) => {
  const { email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    return res.status(400).json({ errors: errorMessages });
  }

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json("User not found");
    }

    const isPasswordMatch = await compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json("Incorrect password");
    }

    const token = jwt.sign(
      {
        email: user.email,
        userId: user._id.toString(),
      },
      "!fuRN0tW!thMEtheng0@w@yNoTManTt0cu",
      { expiresIn: "1h" }
    );

    res.status(200).json({ token: token, userId: user._id.toString() });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
