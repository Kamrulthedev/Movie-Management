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
exports.ReviewServices = void 0;
const movie_model_1 = require("../Movies/movie.model");
const review_model_1 = require("./review.model");
//add Reviews
const addReview = (slug, reviewData) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield movie_model_1.Movie.startSession();
    const movie = yield movie_model_1.Movie.findOne({ slug });
    if (!movie) {
        throw new Error("Movie not found");
    }
    try {
        session.startTransaction();
        const review = yield review_model_1.Review.create([
            Object.assign({ movie: movie._id }, reviewData),
        ], { session });
        const reviewsCount = yield review_model_1.Review.countDocuments({
            movie: movie._id,
        }).session(session);
        // throw new Error("Movie not found");
        yield movie_model_1.Movie.updateOne({ slug }, { totalRating: reviewsCount }, { session });
        yield session.commitTransaction();
        return review[0];
    }
    catch (error) {
        console.log(error);
        yield session.abortTransaction();
        throw error;
    }
    session.endSession();
});
//get all reviews
const GetAllReviewsBySlug = (slug) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movie = yield movie_model_1.Movie.findOne({ slug });
        if (!movie) {
            throw new Error("Movie is not Found");
        }
        const reviews = yield review_model_1.Review.find({ movie: movie._id }).populate("movie", "title");
        return reviews;
    }
    catch (err) {
        throw new Error(`Unable to retrieve reviews: ${err.message}`);
    }
});
//get by id specific Reviews
const GetByReviewId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = yield review_model_1.Review.findById(id);
        if (!review) {
            throw new Error("Reviews Not Found !");
        }
        return review;
    }
    catch (err) {
        throw new Error(`Unable to retrieve the review: ${err.message}`);
    }
});
//delete 
const DeleteReviewById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    const session = yield review_model_1.Review.startSession();
    try {
        const review = yield review_model_1.Review.findById(id).session(session);
        if (!review) {
            throw new Error("Review is Not Found !");
        }
        const movieId = review.movie;
        yield review_model_1.Review.deleteOne({ _id: id }, { session });
        const deleteCound = yield review_model_1.Review.countDocuments({ movie: movieId }).session(session);
        yield movie_model_1.Movie.updateOne({ _id: id }, { totalRating: deleteCound }, { session });
        yield session.commitTransaction();
        return { message: 'Review deleted successfully' };
    }
    catch (err) {
        console.log(err);
        yield session.abortTransaction();
        yield session.endSession();
    }
});
exports.ReviewServices = {
    addReview,
    GetAllReviewsBySlug,
    GetByReviewId,
    DeleteReviewById
};
