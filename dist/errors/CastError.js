"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hendleCustError = (err) => {
    const ErrorSourse = [
        {
            path: err.path,
            message: err.message
        }
    ];
    return {
        message: "Cast Error",
        ErrorSourse
    };
};
exports.default = hendleCustError;
