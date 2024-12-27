const express = require("express");
const {
  loginAdmin,
  logoutAdmin,
  verifyToken,
} = require("../controllers/admin");
const router = express.Router();
const authenticateToken = require("../middleware/auth");

router.get("/test", (req, res) => {
  console.log("Accessing /test route");
  res.send("Admin route is working!");
});

router.post("/login", loginAdmin);
router.post("/logout", logoutAdmin);
router.get("/verify-token", authenticateToken, (req, res) => {
  console.log("In /verify-token route");
  res.json({ valid: true, user: req.user });
});

module.exports = router;
