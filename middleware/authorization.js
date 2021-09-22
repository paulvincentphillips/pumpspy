const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    const jwtToken = req.header("token");

    if (!jwtToken) {
      res.status(403).json("Not Authorized");
    }

    const payload = jwt.verify(jwt, process.env.jwtSecret);

    req.user = payload.user;
  } catch (error) {
    console.error(err.message);
    return res.status(403).json("Not Authorized");
  }
};
