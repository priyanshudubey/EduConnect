const fs = require("fs-extra");
const path = require("path");

const logFilePath = path.join(__dirname, "../logs/activity.log");

const logActivity = (message) => {
  const logMessage = `[${new Date().toISOString()}] ${message}\n`;
  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) console.error("Failed to write log:", err);
  });
};

module.exports = logActivity;
