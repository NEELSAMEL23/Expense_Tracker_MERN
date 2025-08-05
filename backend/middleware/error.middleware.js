export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  if (err.name === "CastError") message = "Resource not found";
  if (err.code === 11000) message = "Duplicate field value entered";

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? "🥷" : err.stack,
  });
};
