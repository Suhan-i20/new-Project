const { validationResult } = require("express-validator"); // Correct import
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");

const Validation = (req, res, next) => {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      // Using httpStatus.BAD_REQUEST properly
      throw new ApiError(httpStatus.BAD_REQUEST, result.array()[0].msg);
    }

    next();
  } catch (error) {
    next(error); // Passing the error to the error handling middleware
  }
};

module.exports = Validation;
