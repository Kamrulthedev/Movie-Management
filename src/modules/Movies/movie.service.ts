import { format } from "date-fns";
import { TMovie } from "./movie.intergace";
import { Movie } from "./movie.model";
import slugify from "slugify";
import { QueryBuilder } from "../../Builder/QueryBuilder";
import { MovieSearchableFields } from "./movie.constant";

const createMovie = async (MovieData: TMovie) => {
  const date = format(MovieData.releaseDate, "dd-MM-yyyy");
  const slug = slugify(`${MovieData.title}-${date}`, { lower: true });
  const result = await Movie.create({ ...MovieData, slug });
  return result;
};

//get all movie
const gatMovie = async (payload: Record<string, unknown>) => {
  const movieQuery = new QueryBuilder(Movie.find({}), payload)
    .filter()   
    .search(MovieSearchableFields) 
    .fields()       
    .paginate()      
    .sort();         

  const results = await movieQuery.modelQuery;
  return results;
};

//get single movie
const getSingleMovie = async (id: string) => {
  const movie = await Movie.findById(id);
  return movie;
};

//get by slug movie
const getMovieBySlug = async (slug: string) => {
  const slugD = await Movie.findOne({ slug: slug });
  return slugD;
};

// exports movie
export const MovieService = {
  createMovie,
  gatMovie,
  getSingleMovie,
  getMovieBySlug,
};
