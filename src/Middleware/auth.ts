import { NextFunction, Request, Response } from "express";
import { USER_Role, USER_STATUS } from "../modules/Users/user.constant";
import { catchAsync } from "../modules/Utils/CatchAsync";
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from "../config";
import { User } from "../modules/Users/user.model";



export const auth = (...requiredRoles: (keyof typeof USER_Role)[]) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
      const accessToken = req.headers.authorization;
  
      if (!accessToken) {
        throw new Error("You are not authorized to access this route");
      }
  
      const verfiedToken = jwt.verify(
        accessToken as string,
        config.jwt_access_secret as string
      );
  
      const { role, email } = verfiedToken as JwtPayload;
  
      const user = await User.findOne({ email });
  
      if (!user) {
        throw new Error("User not found");
      }
  
      if (user.status === USER_STATUS.BLOCKED) {
        throw new Error("User is blocked");
      }
  
      if (!requiredRoles.includes(role)) {
        throw new Error("You are not authorized to access this route");
      }
  
      next();
    });
  };