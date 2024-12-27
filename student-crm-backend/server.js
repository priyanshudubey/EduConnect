require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const adminRoutes = require("./routes/admin");
const authenticateToken = require("./middleware/auth");
const activityLogger = require("./middleware/activity");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000", // Your frontend's origin
    credentials: true, // Allow cookies to be sent
  })
);

app.use(express.json());
app.use(cookieParser());

// Public Routes
app.use("/admin", adminRoutes);

// Protected Routes with Activity Logger
// app.use(authenticateToken);

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
