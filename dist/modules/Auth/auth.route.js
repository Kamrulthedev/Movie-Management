"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_controllat_1 = require("./auth.controllat");
const router = express_1.default.Router();
router.post("/register", auth_controllat_1.authControllers.register);
router.post("/login", auth_controllat_1.authControllers.login);
exports.AuthRoutes = router;
