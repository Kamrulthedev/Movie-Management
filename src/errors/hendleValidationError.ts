import mongoose from "mongoose";
import { TErrorSourse } from "../interface/Error.interface";

const hendleValidationError = (err: mongoose.Error.ValidationError) => {
  const ErrorSourse:TErrorSourse = Object.values(err.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val.path,
        message: val.message,
      };
    }
  );
  return {
    path: "Validation Error",
    ErrorSourse,
  };
};

export default hendleValidationError;
