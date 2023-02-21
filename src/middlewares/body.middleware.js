const { validationChain, validationResult } = require('express-validator');

// Errors utils
const AppError = require('../utils/AppError');

const validate = validations => { 

  return async (req, res, next) => { 
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);

    if (errors.isEmpty()) {
      console.log('No errors: ', errors.array());
      return next();
    };

    return next(new AppError(errors.array(), 400));
  };

};

module.exports = { validate };
