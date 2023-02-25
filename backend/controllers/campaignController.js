import asyncHandler from "express-async-handler";
import Campaign from "../models/campaignModel";

// @desc create a new campaign
// @route POST /api/campaigns
// @access Private
const createCampaign = asyncHandler(async (req, res) => {
  const { name, start, end, story } = req.body;
  const campaign = new Campaign({
    name,
    start,
    end,
    story,
    owner: req.owner._id,
  });
  if (campaign) {
    res.json(campaign);
  } else {
    res.status(200);
    throw new Error("Bad Request");
  }
});

// @desc get all campaigns
// @route GET /api/campaigns
// @access Public
const getCampaigns = asyncHandler(async (req, res) => {
  const campaigns = await Campaign.find({});
  res.json(campaigns);
});

// @desc get campaign by id
// @route GET /api/campaign/:id
// @access Public
const getCampaignById = asyncHandler(async (req, res) => {
  const campaign = await Campaign.findById(req.params.id);
  if (campaign) {
    res.json(campaign);
  } else {
    res.status(200);
    throw new Error("Campaign not found");
  }
});

