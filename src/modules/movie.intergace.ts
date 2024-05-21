import mongoose from "mongoose";


export type Review = {
    email: string;
    rating: number;
    comment: string;
  };
  

export type Movie = {
    title: string;
    description: string;
    releaseDate: string;
    genre: string;
    isDeleted: boolean;
    viewCount: number;
    reviews: Review[];
};
