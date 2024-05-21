import mongoose, { Model } from "mongoose";

export type TReview = {
  email: string;
  rating: number;
  comment: string;
};

export type TMovie = {
  title: string;
  description: string;
  releaseDate: string;
  genre: string;
  isDeleted: boolean;
  viewCount: number;
  reviews: TReview[];
  slug: string;
};


 export type TMovieMethods = {
  createSlug(paylood : TMovie): string;
};

export type MovieModel = Model<TMovie, Record<string,unknown>, TMovieMethods>;