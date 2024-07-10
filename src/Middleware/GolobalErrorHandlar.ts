import { ErrorRequestHandler } from "express";
import { TErrorSourse } from "../interface/Error.interface";
import hendleValidationError from "../errors/hendleValidationError";
import hendleCustError from "../errors/CastError";
import DoplicateError from "../errors/DoplicaiteError";

const golobalErrorhandlar: ErrorRequestHandler = async (err, eq, res, next) => {
  const statusCode = 500;
  const message = "Someting Went Wrong !";

  let ErrorSourse: TErrorSourse = [
    {
      path: "",
      message: "Someting Went Wrong",
    },
  ];

  if (err.name === "ValidationError") {
    const simlipitError = hendleValidationError(err);
    ErrorSourse = simlipitError.ErrorSourse;
 
  }else if(err.name == "CastError"){
    const simlipitError = hendleCustError(err);
    ErrorSourse = simlipitError.ErrorSourse;
  }else if(err.code == 11000){
    const simlipitError = DoplicateError(err)
    ErrorSourse = simlipitError.ErrorSourse
  }

  res.status(500).json({
    success: false,
    message,
    ErrorSourse,
  });
};

export default golobalErrorhandlar;
