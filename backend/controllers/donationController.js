import asyncHandler from "express-async-handler";
import Donation from "../models/donationModel";

// @desc Donate to a campaign
// @route POST /api/donations
// @access Helper
const donateToCampaign = asyncHandler(async (req, res) => {
  const { campaignId, amount, address } = req.body;
  const donation = new Donation({
    donatedTo: campaignId,
    address,
    amount,
  });
  await donation.save();
});

// @desc Get helpers donations
// @route get /api/donations/helpers/:id
// @access Public
const getDonationByHelper = asyncHandler(async (req, res) => {
  const donations = await Donation.find({ donatedFrom: req.params.id });
  if (donations) {
    res.json(donations);
  } else {
    res.status(200);
    throw new Error("Not found");
  }
});

// @desc Get campaigns donations
// @route POST /api/donations/campaign/:id
// @access Public
const getDonationsByCampaign = asyncHandler(async (req, res) => {
  const donations = await Donation.find({ donatedTo: req.params.id });
  if (donations) {
    res.json(donations);
  } else {
    res.status(200);
    throw new Error("Not found");
  }
});

export { donateToCampaign, getDonationByHelper, getDonationsByCampaign };
