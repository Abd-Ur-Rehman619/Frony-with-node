const express = require("express");
const path = require("path");
const { default: mongoose } = require("mongoose");
const shoesRouter = require("./routers/shoes");
const authRouter = require("./routers/auth");
const cartRouter = require("./routers/cart");
const ordersRouter = require("./routers/orders");
const { isAuth } = require("./middleware/is-auth");
const { isUser } = require("./middleware/is-user");

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use("/ShoesImages", express.static(path.join(__dirname, "ShoesImages")));

app.use(shoesRouter);
app.use(authRouter);
app.use(isAuth, isUser, cartRouter);
app.use(isAuth, isUser, ordersRouter);

mongoose
  .connect(
    "mongodb+srv://germany61907:TtAuho6Q59piptCu@forny.oz78vsv.mongodb.net/Forny"
  )
  .catch((err) => {
    console.log("Connection Problem");
  });

app.listen("3000");
