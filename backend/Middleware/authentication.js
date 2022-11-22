const jwt = require("jsonwebtoken");

const Authentication = async (req, res, next) => {
  const user_token = req.headers.authorization.split(" ")[1];
  if (!user_token) {
    return res.status(511).send("you are not authenticated");
  }
  await jwt.verify(user_token, process.env.TOKEN_KEY, function (err, decoded) {
    if (err) {
      return res.status(511).send("you are not authenticated2");
    }
    // console.log(decoded);
    req.body.UserId = decoded.userId;
    next();
  });
};

module.exports = Authentication;
