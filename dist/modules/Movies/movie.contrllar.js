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
const createMovieDb = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Moviedata = req.body;
        const result = yield movie_service_1.MovieService.createMovie(Moviedata);
        res.status(200).json({
            success: true,
            message: "Movie created successfully!",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getMovieDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield movie_service_1.MovieService.gatMovie();
        res.status(200).json({
            success: true,
            message: "Movies fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Somting was Worng Data",
            error: err,
        });
    }
});
const getSingleMovieDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { MovieId } = req.params;
        const result = yield movie_service_1.MovieService.getSingleMovie(MovieId);
        res.status(200).json({
            success: true,
            message: "Single Movie Get is Successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Somting was Worng Movie",
            error: err,
        });
    }
});
const getMovieBySlugDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { slug } = req.params;
        const result = yield movie_service_1.MovieService.getMovieBySlug(slug);
        res.status(200).json({
            success: true,
            message: "get slug by movie successfully",
            data: result
        });
    }
    catch (err) {
        res.status(200).json({
            success: false,
            message: "slug create was worng data",
            data: err
        });
    }
});
exports.MovieContrllar = {
    createMovieDb,
    getMovieDb,
    getSingleMovieDb,
    getMovieBySlugDb
};
