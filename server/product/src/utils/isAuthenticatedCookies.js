const jwt = require("jsonwebtoken");
require("dotenv").config();
const cookieParser = require('cookie-parser');

function isAuthenticated(req, res, next) {
  // Check for the presence of an authorization header
  const token = req.cookies.authToken;
  //console.log(token);

  try {
    // Verify the token using the JWT library and the secret key
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decodedToken)
    req.user = decodedToken;
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: "Unauthorized" });
  }
}

module.exports = { isAuthenticated };
