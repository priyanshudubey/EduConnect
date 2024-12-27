const logActivity = require("../config/logger");

const activityLogger = (req, res, next) => {
  const { method, url } = req;
  const user = req.user ? req.user.email : "Anonymous";
  logActivity(`${user} accessed ${method} ${url}`);
  next();
};

module.exports = activityLogger;
