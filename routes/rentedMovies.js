import express from "express";
var router = express.Router();

import RentedMoviesController from "../controllers/RentedMoviesController.js";

router.post("/", RentedMoviesController.update);
router.post("/:id", RentedMoviesController.deleteById);

export default router;
