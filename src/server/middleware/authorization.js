
const jwt = require('jsonwebtoken');
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {

    // const jwtToken = req.header("token");

    const jwtTokenCookie = req.cookies.token;

    if(!jwtTokenCookie) {
      return res.status(403).json("Not Authorized");
    }

    const payload = jwt.verify(jwtTokenCookie, process.env.jwtSecret);

    req.user = payload.user;
    next();

  } catch (err) {
    console.error(err.message);
    return res.status(403).json("Not Authorized");
  }
}
