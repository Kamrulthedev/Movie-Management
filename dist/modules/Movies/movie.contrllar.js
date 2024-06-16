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
exports.MovieContrllar = void 0;
const movie_service_1 = require("./movie.service");
const CatchAsync_1 = require("../Utils/CatchAsync");
const createMovieDb = (0, CatchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const movieData = req.body;
    const result = yield movie_service_1.MovieService.createMovie(movieData);
    res.json({
        success: true,
        message: "Movie is created successfully !",
        data: result,
    });
}));
const getMovieDb = (0, CatchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield movie_service_1.MovieService.gatMovie(req.query);
    res.status(200).json({
        success: true,
        message: "Movies fetched successfully!",
        data: result,
    });
}));
const getSingleMovieDb = (0, CatchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { MovieId } = req.params;
    const result = yield movie_service_1.MovieService.getSingleMovie(MovieId);
    res.status(200).json({
        success: true,
        message: "Single Movie Get is Successfully",
        data: result,
    });
}));
const getMovieBySlugDb = (0, CatchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { slug } = req.params;
    const result = yield movie_service_1.MovieService.getMovieBySlug(slug);
    res.status(200).json({
        success: true,
        message: "get slug by movie successfully",
        data: result,
    });
}));
exports.MovieContrllar = {
    createMovieDb,
    getMovieDb,
    getSingleMovieDb,
    getMovieBySlugDb,
};
