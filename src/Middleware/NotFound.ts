import { NextFunction, Request, Response } from "express";

const NotFound = (req: Request, res: Response, next: NextFunction) => {
  return res.status(400).json({
    success:false,
    message: "API Not Found !",
    error:""
  });
};

export default NotFound;