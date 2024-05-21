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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieRouter = void 0;
const express_1 = __importDefault(require("express"));
const movie_model_1 = require("./movie.model");
const movie_contrllar_1 = require("./movie.contrllar");
const router = express_1.default.Router();
router.post("/", movie_contrllar_1.MovieContrllar.createMovieDb);
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield movie_model_1.Movie.find();
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
            error: err
        });
    }
}));
const result = ;
exports.MovieRouter = router;
