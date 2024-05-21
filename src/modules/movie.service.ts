import { format } from "date-fns";
import { TMovie } from "./movie.intergace";
import { Movie } from "./movie.model";
import slugify from "slugify";

const createMovie = async (MovieData: TMovie) => {
  const date = format(MovieData.releaseDate, "dd-MM-yyyy");
  const slug = slugify(`${MovieData.title}-${date}` , { lower: true });
  console.log(slug);
  const result = await Movie.create({ ...MovieData, slug });

  return result;
};

const gatMovie = async () => {
  const result = await Movie.find();
  return result;
};

const getSingleMovie = async (id: string) => {
  const movie = await Movie.findById(id);
  return movie;
};

const getMovieBySlug = async (slug: string) => {
  const slugD = await Movie.findOne({ slug: slug });
  return slugD;
};

export const MovieService = {
  createMovie,
  gatMovie,
  getSingleMovie,
  getMovieBySlug,
};
