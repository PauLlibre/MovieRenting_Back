import express from "express";
var router = express.Router();

import RentedMoviesController from "../controllers/RentedMoviesController.js";

router.post("/", RentedMoviesController.update);
router.post("/:id/:user_id", RentedMoviesController.deleteById);
router.get("/:id", RentedMoviesController.getAllMovies);

export default router;
