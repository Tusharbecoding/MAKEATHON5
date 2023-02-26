import express from "express";
import {
  refugeeMiddleware,
  helperMiddleware,
} from "../middlewares/authMiddleware";
import {
  createCampaign,
  getCampaigns,
  getCampaignById,
} from "../controllers/campaignController";
const router = express.Router();

router.route("/").post(helperMiddleware, createCampaign).get(getCampaigns);
router.route("/:id").get(getCampaignById);

export default router;
