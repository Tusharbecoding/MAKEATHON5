import express from "express";
const router = express.Router();
import {
  helperMiddleware,
  refugeeMiddleware,
} from "../middlewares/authMiddleware";
import {
  authHelper,
  registerHelper,
  getHelperProfile,
  getHelpers,
  updateHelper,
  deleteHelper,
  getHelperById,
} from "../controllers/helperController";

router.route("/").post(registerHelper).get(helperMiddleware, getHelpers);
router.route("/login").post(authHelper);
router.route("/profile").get(helperMiddleware, getHelperProfile);
router
  .route("/:id")
  .get(helperMiddleware, getHelperById)
  .put(helperMiddleware, updateHelper)
  .delete(helperMiddleware, deleteHelper);

export default router;
