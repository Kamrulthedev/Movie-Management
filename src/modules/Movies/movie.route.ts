import express from "express";
import { MovieContrllar } from "./movie.contrllar";
import { ReviewControllers } from "../Review/review.controllar";

const router = express.Router();
router.post("/", MovieContrllar.createMovieDb);

router.get("/", MovieContrllar.getMovieDb);

router.get("/:slug", MovieContrllar.getMovieBySlugDb);

router.get("/:MovieId", MovieContrllar.getSingleMovieDb);

router.post("/:slug/review", ReviewControllers.addReviewDb);

router.get("/:slug/reviews", ReviewControllers.GetAllReviewsBySlugDb);

export const MovieRouter = router;
