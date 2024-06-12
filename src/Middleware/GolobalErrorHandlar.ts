import { ErrorRequestHandler } from "express";
import { TErrorSourse } from "../interface/Error.interface";
import hendleValidationError from "../errors/hendleValidationError";

const golobalErrorhandlar: ErrorRequestHandler = async (err, eq, res, next) => {
  let statusCode = 500;
  let message = "Someting Went Wrong !";

  let ErrorSourse: TErrorSourse = [
    {
      path: "",
      message: "Someting Went Wrong",
    },
  ];

  if (err.name === "ValidationError") {
    const simlipitError = hendleValidationError(err);
    ErrorSourse = simlipitError.ErrorSourse;
    console.log(simlipitError);
  }

  res.status(500).json({
    success: false,
    message: err.name,
    ErrorSourse,
  });
};

export default golobalErrorhandlar;
