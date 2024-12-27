const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  console.log("Authenticating Token...");
  console.log("Cookies in request:", req.cookies);

  const token = req.cookies.token;

  if (!token) {
    console.log("Token missing in cookies.");
    return res.status(401).json({ message: "Unauthorized. Please log in." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user data to the request
    console.log("Decoded Token:", decoded);
    next();
  } catch (error) {
    console.error("Token verification failed:", error.message);
    return res.status(403).json({ message: "Invalid or expired token." });
  }
};

module.exports = authenticateToken;
