import express, { Request, Response, json } from "express";
import { MovieRouter } from "./modules/Movies/movie.route";
const app = express()

app.use(json())
app.use('/api/movies', MovieRouter)

app.get('/', (req: Request, res:Response) => {
  res.send('Hello Next!')
})

export default app;