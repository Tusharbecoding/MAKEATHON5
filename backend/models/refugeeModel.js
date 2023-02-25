import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const refugeeSchema = mongoose.Schema({
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
  password: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  documents: [
    {
      link: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: false,
      },
    },
  ],
});

refugeeSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

refugeeSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const Refugee = mongoose.model("Refugee", refugeeSchema);
export default Refugee;
