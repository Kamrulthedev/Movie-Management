import express, { Request, Response } from "express";
import { Movie } from "./movie.model";
import { MovieContrllar } from "./movie.contrllar";

const router = express.Router();
router.post("/", MovieContrllar.createMovieDb);

router.get("/", MovieContrllar.getMovieDb);

router.get("/:MovieId", MovieContrllar.getSingleMovieDb);

export const MovieRouter = router;
