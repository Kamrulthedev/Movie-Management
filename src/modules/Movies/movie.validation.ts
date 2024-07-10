import { z } from "zod";

export const createmovieSchema = z.object({
  body: z.object({
    title: z.string(),
    description: z.string(),
    releaseDate: z.string().optional(),
    genre: z.string(),
    viewCount: z.number().default(0),
    totalRating: z.number().default(0),
    isDeleted: z.boolean().optional().default(false),
    image: z.string()
  }),
});

export const movieValidation = {
  createmovieSchema,
};
