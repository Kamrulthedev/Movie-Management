"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieValidation = exports.createmovieSchema = void 0;
const zod_1 = require("zod");
exports.createmovieSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        description: zod_1.z.string(),
        releaseDate: zod_1.z.string().optional(),
        genre: zod_1.z.string(),
        viewCount: zod_1.z.number().default(0),
        totalRating: zod_1.z.number().default(0),
        isDeleted: zod_1.z.boolean().optional().default(false),
        image: zod_1.z.string()
    }),
});
exports.movieValidation = {
    createmovieSchema: exports.createmovieSchema,
};
