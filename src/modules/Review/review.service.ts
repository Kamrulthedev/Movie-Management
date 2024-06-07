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
const GetAllReviewsBySlug = async(slug:string)=>{
   try{
    const movie =await Movie.findOne({slug});

    if(!movie){
      throw new Error("Movie is not Found")
    }
    const reviews = await Review.find({ movie: movie._id }).populate('movie', 'title')
    return reviews

  }catch(err:any){
    throw new Error(`Unable to retrieve reviews: ${err.message}`)

  }
};

//get by id specific Reviews
const GetByReviewId = async(id:string) =>{
  try{
    const review = await Review.findById(id)
    if(!review){
      throw new Error("Reviews Not Found !")
    }
    return review
  }catch(err:any){
    throw new Error(`Unable to retrieve the review: ${err.message}`);
    
  }
}

export const ReviewServices = {
  addReview,
  GetAllReviewsBySlug,
  GetByReviewId
};
