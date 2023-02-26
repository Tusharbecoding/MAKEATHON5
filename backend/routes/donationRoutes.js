import express from "express";
import { helperMiddleware } from "../middlewares/authMiddleware";
import {
  donateToCampaign,
  getDonationByHelper,
  getDonationsByCampaign,
} from "../controllers/donationController";
const router = express.Router();

router.route("/").post(helperMiddleware, donateToCampaign);
router.route("/helpers/:id").get(getDonationByHelper);
router.route("/campaigns/:id").get(getDonationsByCampaign);

export default router;
