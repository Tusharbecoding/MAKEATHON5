import mongoose from "mongoose";

const donationSchema = mongoose.Schema({
    address:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    donatedOn:{
        type: Date,
        required: true
    },
    donatedTo:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})

const Donation = mongoose.model("Donation", donationSchema)
export default Donation