import express, { Request, Response, json } from "express";
import { MovieRouter } from "./modules/Movies/movie.route";
import NotFound from "./Middleware/NotFound";
import golobalErrorhandlar from "./Middleware/GolobalErrorHandlar";
import { UserRoutes } from "./modules/Users/user.route";
import { AuthRoutes } from "./modules/Auth/auth.route";
const app = express()

app.use(json())
app.use('/api/movies', MovieRouter)

app.use("/api/users", UserRoutes)

app.use("/api/auth", AuthRoutes)

app.get('/', (req: Request, res:Response) => {
  res.send('Hello Next!')
});
app.use(NotFound)
app.use(golobalErrorhandlar)
export default app;