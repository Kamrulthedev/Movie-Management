"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const mongoose_1 = require("mongoose");
const date_fns_1 = require("date-fns");
const slugify_1 = __importDefault(require("slugify"));
const movieSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    releaseDate: {
        type: Date,
    },
    genre: {
        type: String,
        required: [true, "Genre is required"],
    },
    slug: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    viewCount: {
        type: Number,
        default: 0,
    },
    totalRating: {
        type: Number,
        default: 0,
    },
});
movieSchema.method('createSlug', function createSlug(paylood) {
    const date = (0, date_fns_1.format)(paylood.releaseDate, "dd-mm-yyyy");
    const slug = (0, slugify_1.default)(`${paylood.title}-${date}`, { lower: true });
});
exports.Movie = (0, mongoose_1.model)('Movie', movieSchema);
