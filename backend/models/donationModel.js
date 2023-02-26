import mongoose from "mongoose";

const donationSchema = mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  donatedFrom: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Helper",
  },
  donatedOn: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  donatedTo: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Campaign",
  },
});

const Donation = mongoose.model("Donation", donationSchema);
export default Donation;
