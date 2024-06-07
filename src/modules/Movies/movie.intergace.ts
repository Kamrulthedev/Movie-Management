import mongoose, { Model } from "mongoose";


export type TMovie = {
  title: string;
  description: string;
  releaseDate: Date;
  genre: string;
  slug: string;
  viewCount: number;
  totalRating: number;
  isDeleted?: boolean;
};


 export type TMovieMethods = {
  createSlug(paylood : TMovie): string;
};

export type TMovieModel = Model<TMovie, Record<string,unknown>, TMovieMethods>;