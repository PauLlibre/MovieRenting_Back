import { Router } from "express";
var router = Router();

import UserController from "../controllers/UserController.js";
import isSuperAdmin from "../middelwares/isSuperAdmin.js";
import verifyToken from "../middelwares/verifyToken.js";

/* GET users listing. */
router.get("/", verifyToken, isSuperAdmin, UserController.getAll);
router.post("/:id", UserController.deleteById);
router.get("/:id", UserController.getById);

export default router;
