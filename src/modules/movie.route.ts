import express, { Request, Response } from "express"
import { Movie } from "./movie.model";

const router = express.Router()

router.post('/', async(req:Request, res:Response)=>{

   try{
    const result = await Movie.create(req.body)
   res.status(200).json({
    success:true,
    message:'Movie Created is successfully',
    data: result
   })
   }catch(err){
    res.status(500).json({
        success:false,
        message:"Somting Was wrong Movie"
    })
   }
});

export const MovieRouter = router;