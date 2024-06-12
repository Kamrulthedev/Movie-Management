"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotFound = (req, res, next) => {
    return res.status(400).json({
        success: false,
        message: "API Not Found !",
        error: ""
    });
};
exports.default = NotFound;
