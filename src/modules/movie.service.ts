import { TMovie } from "./movie.intergace";
import { Movie } from "./movie.model";

const createMovie = async (data: TMovie) => {
  const result = await Movie.create(data);
  return result;
};

export const MovieService = {
  createMovie,
};
