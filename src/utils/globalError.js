const globalError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  // Mode in Development
  if (process.env.NODE_ENV === "Development") {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      stack: err.stack,
    })
  } 
  // Mode in Production
  if (process.env.NODE_ENV === "Production") { 
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    })
  }
}

module.exports = globalError;