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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userControllers = void 0;
const CatchAsync_1 = require("../Utils/CatchAsync");
const user_service_1 = require("./user.service");
const createAdmin = (0, CatchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserServices.createAdminIntoDB(req.body);
    res.status(200).json({
        success: true,
        message: "Admin is created successfully!",
        data: result,
    });
}));
const updateUser = (0, CatchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const result = yield user_service_1.UserServices.updateUser(userId, req.body);
    res.status(200).json({
        success: true,
        message: "User updated successfully!",
        data: result,
    });
}));
const getAllUserDb = (0, CatchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserServices.getAllUser();
    res.status(200).json({
        success: true,
        message: "User Retrived successfully!",
        data: result,
    });
}));
exports.userControllers = {
    createAdmin,
    updateUser,
    getAllUserDb
};
