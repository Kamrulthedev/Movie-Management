"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieRouter = void 0;
const express_1 = __importDefault(require("express"));
const movie_contrllar_1 = require("./movie.contrllar");
const router = express_1.default.Router();
router.post("/", movie_contrllar_1.MovieContrllar.createMovieDb);
router.get("/", movie_contrllar_1.MovieContrllar.getMovieDb);
router.get("/:MovieId", movie_contrllar_1.MovieContrllar.getSingleMovieDb);
exports.MovieRouter = router;
