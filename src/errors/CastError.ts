import mongoose from "mongoose";
import { TErrorSourse } from "../interface/Error.interface";

const hendleCustError = (err: mongoose.Error.CastError) => {
    const ErrorSourse: TErrorSourse = [
        {
            path: err.path,
            message:err.message
        }
    ];
    return {
        message: "Cast Error",
        ErrorSourse
    }
};

export default hendleCustError;
