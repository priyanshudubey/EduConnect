const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Admin } = require("../models"); // Assuming you're using Sequelize

// Admin Login Controller
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  console.log("into loginAdmin");

  try {
    // Check if admin exists
    const admin = await Admin.findOne({ where: { email } });
    if (!admin) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, admin.password_hash);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: admin.id, email: admin.email, school_id: admin.school_id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Set HTTP-only secure cookie
    res.cookie("token", token, {
      httpOnly: true, // Prevent client-side JavaScript from accessing the cookie
      secure: true, // Use true in production with HTTPS
      sameSite: "Lax", // Use "None" if cross-origin; Lax works for same-site
      maxAge: 3600000, // Token valid for 1 hour
    });

    console.log("Set-Cookie header:", res.getHeaders()["set-cookie"]);

    // Respond with success message
    res.status(200).json({ message: "Login successful." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error. Please try again later." });
  }
};

// Admin Logout Controller
const logoutAdmin = (req, res) => {
  res.clearCookie("token"); // Clear the JWT cookie
  res.status(200).json({ message: "Logout successful." });
};

const verifyToken = (req, res) => {
  console.log("Received /verify-token request"); // Log request arrival
  console.log("Cookies:", req.cookies); // Log cookies received

  const token = req.cookies.token;

  if (!token) {
    console.log("No token found in cookies"); // Log missing token
    return res.status(401).json({ valid: false, message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded); // Log decoded token
    return res.status(200).json({ valid: true, user: decoded });
  } catch (error) {
    console.error("Token verification failed:", error.message); // Log errors
    return res
      .status(401)
      .json({ valid: false, message: "Invalid or expired token" });
  }
};

module.exports = { loginAdmin, logoutAdmin, verifyToken };
