const jwt = require('jsonwebtoken');
const { ApiError, errors } = require('../utils/errors');

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      throw errors.UNAUTHORIZED;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    next(new ApiError(401, 'Invalid token'));
  }
};

const adminMiddleware = (req, res, next) => {
  if (req.user?.role !== 'admin') {
    return next(new ApiError(403, 'Admin access required'));
  }
  next();
};

module.exports = {
  authMiddleware,
  adminMiddleware,
};
