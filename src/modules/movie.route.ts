import express, { Request, Response } from "express";
import { Movie } from "./movie.model";
import { MovieContrllar } from "./movie.contrllar";

const router = express.Router();
router.post("/", MovieContrllar.createMovieDb);

router.get("/", async (req: Request, res: Response) => {
  try {
    const result = await Movie.find();
    res.status(200).json({
      success: true,
      message: "Movies fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message:"Somting was Worng Data",
      error:err
    });
  }
});

export const MovieRouter = router;
