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
const CastError_1 = __importDefault(require("../errors/CastError"));
const DoplicaiteError_1 = __importDefault(require("../errors/DoplicaiteError"));
const golobalErrorhandlar = (err, eq, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let statusCode = 500;
    let message = "Someting Went Wrong !";
    let ErrorSourse = [
        {
            path: "",
            message: "Someting Went Wrong",
        },
    ];
    if (err.name === "ValidationError") {
        const simlipitError = (0, hendleValidationError_1.default)(err);
        ErrorSourse = simlipitError.ErrorSourse;
    }
    else if (err.name == "CastError") {
        const simlipitError = (0, CastError_1.default)(err);
        ErrorSourse = simlipitError.ErrorSourse;
    }
    else if (err.code == 11000) {
        const simlipitError = (0, DoplicaiteError_1.default)(err);
        ErrorSourse = simlipitError.ErrorSourse;
    }
    res.status(500).json({
        success: false,
        message,
        ErrorSourse,
    });
});
exports.default = golobalErrorhandlar;
