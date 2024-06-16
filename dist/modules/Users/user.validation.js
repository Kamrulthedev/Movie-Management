"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidations = void 0;
const zod_1 = require("zod");
const user_constant_1 = require("./user.constant");
const createAdminValidations = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        role: zod_1.z.nativeEnum(user_constant_1.USER_Role).default(user_constant_1.USER_Role.ADMIN),
        email: zod_1.z.string().email(),
        password: zod_1.z.string(),
        status: zod_1.z.nativeEnum(user_constant_1.USER_STATUS).default(user_constant_1.USER_STATUS.ACTIVE),
    }),
});
const updateUserValidations = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        role: zod_1.z.nativeEnum(user_constant_1.USER_Role).optional(),
        status: zod_1.z.nativeEnum(user_constant_1.USER_STATUS).optional(),
    }),
});
exports.UserValidations = {
    createAdminValidations,
    updateUserValidations,
};
