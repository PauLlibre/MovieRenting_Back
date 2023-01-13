import express from "express";
var router = express.Router();

import MovieController from "../controllers/MovieController.js";

/* GET users listing. */
router.get("/", MovieController.getAll);
router.get("/:id", MovieController.getFilmById);

export default router;
