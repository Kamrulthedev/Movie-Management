import mongoose, { Schema, model } from "mongoose";
import { TMovie } from "./movie.intergace";

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

const movieSchema = new Schema<TMovie>({
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
    reviews: [reviewsSchema]
  });
  
   export const Movie = model<TMovie>('Movie', movieSchema);