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
exports.authControllers = void 0;
const config_1 = __importDefault(require("../../config"));
const CatchAsync_1 = require("../Utils/CatchAsync");
const auth_service_1 = require("./auth.service");
const register = (0, CatchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.AuthServices.register(req.body);
    res.status(200).json({
        success: true,
        message: "User registered successfully!",
        data: result,
    });
}));
const login = (0, CatchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { accessToken, refreshToken } = yield auth_service_1.AuthServices.login(req.body);
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: config_1.default.NODE_ENV === "production",
    });
    res.status(200).json({
        success: true,
        message: "User logged in successfully!",
        data: {
            accessToken,
        },
    });
}));
exports.authControllers = {
    register,
    login,
};
