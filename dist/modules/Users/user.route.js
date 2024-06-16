"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controllar_1 = require("./user.controllar");
const user_validation_1 = require("./user.validation");
const validaedRequest_1 = __importDefault(require("../../Middleware/validaedRequest"));
const router = express_1.default.Router();
router.post("/create-admin", (0, validaedRequest_1.default)(user_validation_1.UserValidations.createAdminValidations), user_controllar_1.userControllers.createAdmin);
router.put("/:userId", (0, validaedRequest_1.default)(user_validation_1.UserValidations.updateUserValidations), user_controllar_1.userControllers.updateUser);
router.get('/', user_controllar_1.userControllers.getAllUserDb);
exports.UserRoutes = router;
