import { MovieService } from "./movie.service";
import { catchAsync } from "../Utils/CatchAsync";

const createMovieDb = catchAsync(async (req, res, next) => {
  const movieData = req.body;
  const result = await MovieService.createMovie(movieData);
  res.json({
    success: true,
    message: "Movie is created successfully !",
    data: result,
  });
});

const getMovieDb = catchAsync(async (req, res) => {
  const result = await MovieService.gatMovie(req.query);
  res.status(200).json({
    success: true,
    message: "Movies fetched successfully!",
    data: result,
  });
});

const getSingleMovieDb = catchAsync(async (req, res) => {
  const { MovieId } = req.params;
  const result = await MovieService.getSingleMovie(MovieId);
  res.status(200).json({
    success: true,
    message: "Single Movie Get is Successfully",
    data: result,
  });
});

const getMovieBySlugDb = catchAsync(async (req, res) => {
  const { slug } = req.params;
  const result = await MovieService.getMovieBySlug(slug);
  res.status(200).json({
    success: true,
    message: "get slug by movie successfully",
    data: result,
  });
});

export const MovieContrllar = {
  createMovieDb,
  getMovieDb,
  getSingleMovieDb,
  getMovieBySlugDb,
};
