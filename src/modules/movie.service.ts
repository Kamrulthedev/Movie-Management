
import { TMovie } from './movie.intergace';
import { Movie } from './movie.model';

const createMovie = async (data: TMovie) => {
  const result = await Movie.create(data);
  return result;
};

const gatMovie = async() =>{
  const result = await Movie.find();
  return result;
};

const getSingleMovie = async (id: string) => {
  const movie = await Movie.findById(id);
  return movie;
};

export const MovieService = {
  createMovie,
  gatMovie,
  getSingleMovie
};

