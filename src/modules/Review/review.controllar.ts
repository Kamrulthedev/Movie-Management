import { NextFunction, Request, Response } from "express";
import { ReviewServices } from "./review.service";
import { catchAsync } from "../Utils/CatchAsync";

const addReviewDb = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { slug } = req.params;
    const reviewData = req.body;
    const result = await ReviewServices.addReview(slug, reviewData);
    res.json({
      success: true,
      message: "Review is created successfully!",
      data: result,
    });
  }
);

const GetAllReviewsBySlugDb = catchAsync(async (req, res, next) => {
  const { slug } = req.params;
  const result = await ReviewServices.GetAllReviewsBySlug(slug);
  res.json({
    success: true,
    message: "Reviews get by specific Movie successfully!",
    data: result,
  });
});

const GetByReviewIdDb = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await ReviewServices.GetByReviewId(id);
  res.json({
    success: true,
    message: "Single Review Get is Successfully",
    data: result,
  });
});

const deleteReviewDb = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await ReviewServices.DeleteReviewById(id);
  res.json({
    success: true,
    message: "Delete review successfully",
    data: result,
  });
});

export const ReviewControllers = {
  addReviewDb,
  GetAllReviewsBySlugDb,
  GetByReviewIdDb,
  deleteReviewDb
};
