"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hendleValidationError = (err) => {
    const ErrorSourse = Object.values(err.errors).map((val) => {
        return {
            path: val.path,
            message: val.message,
        };
    });
};
exports.default = hendleValidationError;
