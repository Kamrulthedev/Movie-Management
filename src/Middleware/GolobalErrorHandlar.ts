import { ErrorRequestHandler } from "express";

const golobalErrorhandlar: ErrorRequestHandler = async (err, eq, res, next) => {

    
  res.status(500).json({
    success: false,
    message: "Someting Went Wrong !!",
    err,
  });
};

export default golobalErrorhandlar;
