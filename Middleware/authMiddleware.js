const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");

exports.auth = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("JWT")) {
    token = req.headers.authorization.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id);
      next();
    } catch (error) {
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) return res.status(401).json({ message: "Not authorized, no token" });
};
