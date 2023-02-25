import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const helperSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  imageUrl:{
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  campaignsCreated: [
    {
      campaignId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Campaign",
      },
      createdOn: {
        type: Date,
        required: false,
      },
    },
  ],
  campaignsDonated: [
    {
      campaignId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Campaign",
      },
      donatedOn: {
        type: Date,
        required: false,
      },
      amount: {
        type: Number,
        required: true,
      },
    },
  ],
});

helperSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

helperSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const Helper = mongoose.model("Helper", helperSchema);
export default Helper;
