import express from "express";
const router = express.Router();
import { refugeeMiddleware } from "../middlewares/authMiddleware";
import {
  authRefugee,
  registerRefugee,
  getRefugeeById,
  getRefugeeProfile,
  getRefugees,
  deleteRefugee,
} from "../controllers/refugeeController";

router.route("/").post(registerRefugee).get(refugeeMiddleware, getRefugees);
router.route("/login").post(authRefugee);
router.route("/profile").get(refugeeMiddleware, getRefugeeProfile);
router
  .route("/:id")
  .get(refugeeMiddleware, getRefugeeById)
  .delete(refugeeMiddleware, deleteRefugee);

export default router;
