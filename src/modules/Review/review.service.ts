import { Movie } from "../Movies/movie.model";
import { TReview } from "./review.interface";
import { Review } from "./review.model";

//add Reviews
const addReview = async (slug: string, reviewData: Partial<TReview>) => {
  const session = await Movie.startSession();
  const movie = await Movie.findOne({ slug });
  if (!movie) {
    throw new Error("Movie not found");
  }
  try {
    session.startTransaction();
    const review = await Review.create(
      [
        {
          movie: movie._id,
          ...reviewData,
        },
      ],
      { session }
    );
    const reviewsCount = await Review.countDocuments({
      movie: movie._id,
    }).session(session);
    // throw new Error("Movie not found");
    await Movie.updateOne({ slug }, { totalRating: reviewsCount }, { session });
    await session.commitTransaction();
    return review[0];
  } catch (error) {
    console.log(error);
    await session.abortTransaction();
    throw error;
  }
  session.endSession();
};

//get all reviews
const GetAllReviewsBySlug = async (slug: string) => {
  try {
    const movie = await Movie.findOne({ slug });

    if (!movie) {
      throw new Error("Movie is not Found");
    }
    const reviews = await Review.find({ movie: movie._id }).populate(
      "movie",
      "title"
    );
    return reviews;
  } catch (err: any) {
    throw new Error(`Unable to retrieve reviews: ${err.message}`);
  }
};

//get by id specific Reviews
const GetByReviewId = async (id: string) => {
  try {
    const review = await Review.findById(id);
    if (!review) {
      throw new Error("Reviews Not Found !");
    }
    return review;
  } catch (err: any) {
    throw new Error(`Unable to retrieve the review: ${err.message}`);
  }
};

//delete 
const DeleteReviewById = async (id: string) => {
  console.log(id)
  const session = await Review.startSession();
  try {
    const review = await Review.findById(id).session(session);
    if (!review) {
      throw new Error("Review is Not Found !");
    }
    const movieId = review.movie;
    await Review.deleteOne({ _id: id }, { session });
    const deleteCound = await Review.countDocuments({ movie: movieId }).session(
      session
    );
    await Movie.updateOne(
      { _id: id },
      { totalRating: deleteCound },
      { session }
    );
    await session.commitTransaction();
    return { message: 'Review deleted successfully' };
  } catch (err: any) {
    console.log(err)
    await session.abortTransaction();
    await session.endSession();
  }
};

export const ReviewServices = {
  addReview,
  GetAllReviewsBySlug,
  GetByReviewId,
  DeleteReviewById
};
