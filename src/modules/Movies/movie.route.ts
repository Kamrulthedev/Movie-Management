import express from "express";
import { MovieContrllar } from "./movie.contrllar";
import { ReviewControllers } from "../Review/review.controllar";
import { movieValidation } from "./movie.validation";
import validationRequest from "../../Middleware/validaedRequest";

const router = express.Router();
router.post("/",validationRequest(movieValidation.createmovieSchema), MovieContrllar.createMovieDb);

router.get("/", MovieContrllar.getMovieDb);

router.get("/:slug", MovieContrllar.getMovieBySlugDb);

router.get("/:MovieId", MovieContrllar.getSingleMovieDb);

router.post("/:slug/review", ReviewControllers.addReviewDb);

router.get("/:slug/reviews", ReviewControllers.GetAllReviewsBySlugDb);

router.get("/:slug/reviews/:id", ReviewControllers.GetByReviewIdDb);

router.delete("/:slug/reviews/:id", ReviewControllers.deleteReviewDb);

export const MovieRouter = router;
