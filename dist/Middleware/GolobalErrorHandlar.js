"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hendleValidationError_1 = __importDefault(require("../errors/hendleValidationError"));
const golobalErrorhandlar = (err, eq, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let statusCode = 500;
    let message = "Someting Went Wrong !";
    const ErrorSourse = {
        path: "",
        message: "Someting Went Wrong"
    };
    if (err.name === "ValidationError") {
        const simlipitError = (0, hendleValidationError_1.default)(err);
    }
    ;
    res.status(500).json({
        success: false,
        message: "Someting Went Wrong !!",
        err,
    });
});
exports.default = golobalErrorhandlar;
