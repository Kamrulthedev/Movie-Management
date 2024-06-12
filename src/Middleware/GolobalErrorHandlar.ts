import { ErrorRequestHandler } from "express";
import { TErrorSourse } from "../interface/Error.interface";

const golobalErrorhandlar: ErrorRequestHandler = async (err, eq, res, next) => {
  let statusCode = 500;
  let message = "Someting Went Wrong !";

  const ErrorSourse: TErrorSourse = {
    path:"",
    message:"Someting Went Wrong"
  };

  res.status(500).json({
    success: false,
    message: "Someting Went Wrong !!",
    err,
  });
};

export default golobalErrorhandlar;
