import mongoose, { Model, Schema, model } from "mongoose";
import {TMovie, TMovieMethods, TMovieModel } from "./movie.intergace";
import { format } from "date-fns";
import slugify from "slugify";


const movieSchema = new Schema<TMovie, TMovieModel, TMovieMethods>({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  releaseDate: {
    type: Date,
  },
  genre: {
    type: String,
    required: [true, "Genre is required"],
  },
  slug: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  viewCount: {
    type: Number,
    default: 0,
  },
  totalRating: {
    type: Number,
    default: 0,
  },
});
  
  // movieSchema.pre('save', async function(next){
  //   const date = format(this.releaseDate, "dd-MM-yyyy");
  //   this.slug = slugify(`${this.title}-${date}` , { lower: true });
  //   next()
  // });

  movieSchema.method('createSlug', function createSlug(paylood) {
      const date = format(paylood.releaseDate, "dd-mm-yyyy");
       const slug = slugify(`${paylood.title}-${date}`, {lower:true});
  });
  
   export const Movie = model<TMovie>('Movie', movieSchema);