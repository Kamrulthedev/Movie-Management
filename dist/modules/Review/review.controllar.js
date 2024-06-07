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
        message: "Review is created successfully!",
        data: result,
    });
}));
const GetAllReviewsBySlugDb = (0, CatchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { slug } = req.params;
    const result = yield review_service_1.ReviewServices.GetAllReviewsBySlug(slug);
    res.json({
        success: true,
        message: "Reviews get by specific Movie successfully!",
        data: result,
    });
}));
const GetByReviewIdDb = (0, CatchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield review_service_1.ReviewServices.GetByReviewId(id);
    res.json({
        success: true,
        message: "Single Review Get is Successfully",
        data: result,
    });
}));
const deleteReviewDb = (0, CatchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield review_service_1.ReviewServices.DeleteReviewById(id);
    res.json({
        success: true,
        message: "Delete review successfully",
        data: result,
    });
}));
exports.ReviewControllers = {
    addReviewDb,
    GetAllReviewsBySlugDb,
    GetByReviewIdDb,
    deleteReviewDb
};
