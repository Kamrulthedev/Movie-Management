import mongoose, { Model, Schema, model } from "mongoose";
import { TMovie } from "./movie.intergace";
import { format } from "date-fns";
import slugify from "slugify";

const reviewsSchema = new Schema({
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    comment: {
      type: String,
      required: true
    }
  });

const movieSchema = new Schema<TMovie, MovieModel, TMovieMethods>({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    releaseDate: {
      type: String,
      required: true
    },
    genre: {
      type: String,
      required: true
    },
    isDeleted: {
      type: Boolean,
      required: true,
      default: false
    },
    viewCount: {
      type: Number,
      required: true,
      default: 0,
      min: 0
    },
    reviews: [reviewsSchema],
    slug: {type: String, required: true, unique:true}
  });
  
  // movieSchema.pre('save', async function(next){
  //   const date = format(this.releaseDate, "dd-MM-yyyy");
  //   this.slug = slugify(`${this.title}-${date}` , { lower: true });
  //   next()
  // });

   type TMovieMethods = {
    createSlug(): string;
  };
  
  type MovieModel = Model<TMovie, Record<string,unknown>, TMovieMethods>;

   export const Movie = model<TMovie>('Movie', movieSchema);