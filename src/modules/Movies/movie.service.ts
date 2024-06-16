import { format } from "date-fns";
import { TMovie } from "./movie.intergace";
import { Movie } from "./movie.model";
import slugify from "slugify";

const createMovie = async (MovieData: TMovie) => {
  const date = format(MovieData.releaseDate, "dd-MM-yyyy");
  const slug = slugify(`${MovieData.title}-${date}`, { lower: true });
  const result = await Movie.create({ ...MovieData, slug });
  return result;
};

//get all movie
const gatMovie = async (payload: Record<string, unknown>) => {
  // Search fields
  let searchTerm = "";
  if (payload?.searchTerm) {
    searchTerm = payload.searchTerm as string;
  }
  const searchableFields = ["title", "genre"];
  const searchQuery = {
    $or: searchableFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: "i" },
    })),
  };

  //paginattion
  let limit: number = Number(payload?.limit || 10);
  let skip: number = 0;

  if (payload?.page) {
    const page: number = Number(payload?.page || 1);
    skip = Number((page - 1) * limit);
  }

  const skipQuiery =  searchQuery.skip(skip)

  const limitQuiery = skipQuiery.limit(limit)

  // Copy from payload object
  const queryObj = { ...payload };
  const excludeFields = ["searchTerm"];
  excludeFields.forEach((e) => delete queryObj[e]);
  const finalQuery = {
    $and: [searchQuery, queryObj],
  };

  const searchedMovie = await Movie.find(finalQuery);
  return searchedMovie;
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
