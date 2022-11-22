const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const USER = require("../Schema/user.schema");

const userController = express.Router();

userController.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  await bcrypt.hash(password, 8, async (err, hash) => {
    if (err) {
      return res.status(511).send("password not hashed");
    }
    const user = await USER.create({ name, email, password: hash });
    return res.status(200).send({ mess: "Registred", user: user });
  });
});

userController.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // console.log(email);
  const user = await USER.findOne({ email });
  if (!user) {
    return res.status(404).send("Invalid User");
  }
  const hashed_pass = user.password;

  await bcrypt.compare(password, hashed_pass, (err, result) => {
    if (err) {
      return res.status(511).send("bcryption failed");
    }
    if (result) {
      const token = jwt.sign(
        { email: user.email, userId: user._id },
        process.env.TOKEN_KEY
      );
      res.send({
        message: "login successful",
        token: token,
        email: email,
        name: user.name,
      });
    } else {
      res.send("Inavalid Password");
    }
  });
});

module.exports = userController;
