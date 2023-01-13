import { Router } from "express";
const router = Router();

import indexRouter from "./routes/index.js";
import userRouter from "./routes/user.js";
import authRouter from "./routes/auth.js";
import moviesRouter from "./routes/movie.js";
import rentedMovies from "./routes/rentedMovies.js";

// routes
router.use("/", indexRouter);
router.use("/users", userRouter);

// auth
router.use("/auth", authRouter);

router.use("/movies", moviesRouter);

router.use("/rentedmovies", rentedMovies);

export default router;
