"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const mongoose_1 = require("mongoose");
const date_fns_1 = require("date-fns");
const slugify_1 = __importDefault(require("slugify"));
const reviewsSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: true
    }
});
const movieSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    releaseDate: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        required: true,
        default: false
    },
    viewCount: {
        type: Number,
        required: true,
        default: 0,
        min: 0
    },
    reviews: [reviewsSchema],
    slug: { type: String, required: true, unique: true }
});
// movieSchema.pre('save', async function(next){
//   const date = format(this.releaseDate, "dd-MM-yyyy");
//   this.slug = slugify(`${this.title}-${date}` , { lower: true });
//   next()
// });
movieSchema.method('createSlug', function createSlug(paylood) {
    const date = (0, date_fns_1.format)(paylood.releaseDate, "dd-mm-yyyy");
    const slug = (0, slugify_1.default)(`${paylood.title}-${date}`, { lower: true });
});
exports.Movie = (0, mongoose_1.model)('Movie', movieSchema);
