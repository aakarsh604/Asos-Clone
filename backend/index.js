const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const { default: mongoose } = require("mongoose");
const userController = require("./Controllers/user.controller");
const shoeController = require("./Controllers/shoe.controller");
const menController = require("./Controllers/men.controller");
const womenController = require("./Controllers/women.controller");
const Authentication = require("./Middleware/authentication");
const cartController = require("./Controllers/cart.controller");
// const shoeController = require("./Controllers/shoe.controller");

app.use(express.json());

app.use(
  cors({
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  })
);

app.get("/", (req, res) => {
  res.send("homepage");
});

app.use('/user',userController)
app.use('/shoe', shoeController)
app.use('/men',menController)
app.use('/women',womenController)
app.use('/cart',Authentication,cartController)


app.listen(process.env.PORT, async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to Mongoose server");
  } catch (e) {
    console.log("error connecting to Mongoose server");
  }
});
