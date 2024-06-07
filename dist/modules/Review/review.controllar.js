"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewControllers = void 0;
const review_service_1 = require("./review.service");
const CatchAsync_1 = require("../Utils/CatchAsync");
const addReviewDb = (0, CatchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { slug } = req.params;
    const reviewData = req.body;
    const result = yield review_service_1.ReviewServices.addReview(slug, reviewData);
    res.json({
        success: true,
        message: 'Review is created successfully!',
        data: result,
    });
}));
// const getReviewDb = async (req: Request, res: Response) => {
//   try {
//     const result = await ReviewService.gatReview();
//     res.status(200).json({
//       success: true,
//       message: "Reviews fetched successfully!",
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: "Somting was Worng Data",
//       error: err,
//     });
//   }
// };
// const getSingleReviewDb = async (req: Request, res: Response) => {
//   try {
//     const { ReviewId } = req.params;
//     const result = await ReviewService.getSingleReview(ReviewId);
//     res.status(200).json({
//       success: true,
//       message: "Single Review Get is Successfully",
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: "Somting was Worng Review",
//       error: err,
//     });
//   }
// };
// const getReviewBySlugDb = async (req:Request, res:Response) =>{
//   try{
//     const {slug} = req.params;
//     const result = await ReviewService.getReviewBySlug(slug);
//     res.status(200).json({
//       success:true,
//       message:"get slug by review successfully",
//       data:result
//     })
//   }catch(err){
//     res.status(200).json({
//       success:false,
//       message:"slug create was worng data",
//       data:err
//     })
//   }
// };
exports.ReviewControllers = {
    addReviewDb
};
