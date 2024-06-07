import { Movie } from "../Movies/movie.model";
import { TReview } from "./review.interface";
import { Review } from "./review.model";

const addReview = async (slug: string, reviewData: Partial<TReview>) => {
  const movie = await Movie.findOne({ slug });

  if (!movie) {
    throw new Error("Movie Not Found !!");
  }
  const review = await Review.create({
    movie: movie._id,
    ...reviewData,
  });

  const reviewCount = await Review.countDocuments({
    movie: movie._id,
  });

  await Movie.updateOne({ slug }, { totalRating: reviewCount }, { new: true });

  return review;
};

export const ReviewServices = {
  addReview,
};
