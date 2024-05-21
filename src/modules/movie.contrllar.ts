import { Request, Response } from "express";
import { MovieService } from "./movie.service";

const createMovieDb = async (req: Request, res: Response) => {
  try {
    const {data: Moviedata } = req.body;
    const result = MovieService.createMovie(Moviedata);
    res.status(200).json({
      success: true,
      message: "Movie created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Somting Was wrong Movie",
      error: err,
    });
  }
};

export const MovieContrllar = {
  createMovieDb,
};
