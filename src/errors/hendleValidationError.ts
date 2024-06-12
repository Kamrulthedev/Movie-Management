import mongoose from "mongoose";

const hendleValidationError = (err: mongoose.Error.ValidationError) => {
  const ErrorSourse = Object.values(err.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val.path,
        message: val.message,
      };
    }
  );
};

export default hendleValidationError;
