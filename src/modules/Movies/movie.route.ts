import express from "express";
import { MovieContrllar } from "./movie.contrllar";

const router = express.Router();
router.post("/", MovieContrllar.createMovieDb);

router.get("/", MovieContrllar.getMovieDb);

router.get("/:slug", MovieContrllar.getMovieBySlugDb);

router.get("/:MovieId", MovieContrllar.getSingleMovieDb);

export const MovieRouter = router;